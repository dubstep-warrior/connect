import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Base } from 'src/app/core/directives/base.directive';
import { User } from 'src/app/core/interface/user';
import { ChatService } from 'src/app/services/chat/chat.service';
import { OverlayService } from 'src/app/services/overlay/overlay.service';
import { AddGroupComponent } from 'src/app/shared/add-group/add-group.component';
import { ContactsComponent } from 'src/app/shared/contacts/contacts.component';
import { DraftMessageComponent } from 'src/app/shared/draft-message/draft-message.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends Base implements AfterViewInit {
  user: User;
  contacts: Array<User>;
  chats: Array<any>;
  currentChat: any;
  state: any = {
    loading: false,
    loadingChatId: null,
  };

  constructor(
    private service: ChatService,
    private overlayService: OverlayService
  ) {
    super();
  }

  async ngAfterViewInit(): Promise<void> {
    this.service.user.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.user = data; 
    });
    this.service.contacts.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.contacts = data;
    });
    this.service.chats.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.chats = data.map((chat: any) => {
        const chatData = chat.name
          ? {
              ...chat,
              image: chat.image ?? '/media/standard/chatroom.png',
            }
          : {
              ...chat,
              to_user: chat.users.find(
                (user: any) =>
                  user.id !==
                  JSON.parse(localStorage.getItem('currentUser') as string)[
                    'user_id'
                  ]
              ),
            };
        if(chatData.to_user) {
          chatData.to_user.profile_img = chatData.to_user.profile_img ?? '/media/standard/profile_img.jpg'
        }
        return chatData
      });
    });
    this.service.currentChat.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.currentChat = data.chatroom
        ? {
            ...data,
            image: data.image ?? '/media/standard/chatroom.png',
            form: new FormGroup({ 
              message: new FormControl(''),
              chat: new FormControl(data.id),
            }),
          }
        : {
            ...data,
            form: new FormGroup({ 
              message: new FormControl(''),
              chat: new FormControl(data.id),
            }),
            to_user: {
              ...data.users.find(
                (user: any) =>
                  user.id !==
                  JSON.parse(localStorage.getItem('currentUser') as string)[
                    'user_id'
                  ]
              ),
            },
          };
        if(this.currentChat.to_user) {
          this.currentChat.to_user.profile_img = this.currentChat.to_user.profile_img ?? '/media/standard/profile_img.jpg'
        } 
    });
    this.service.messages.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.currentChat.messages.push(data);
    });
    await this.service.retrieveContacts();
  }

  newGroup() {
    const overlay = this.overlayService.open({
      content: AddGroupComponent,
      options: {
        data: {
          title: 'Add new group',
          form: new FormGroup({
            chatroom: new FormControl(true),
            name: new FormControl(''),
            image: new FormControl(''),
            users: new FormControl([]),
          }),
        },
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) {
        this.addUserstoGroup(data);
      }
    });
  }

  addUserstoGroup(data: FormGroup) {
    const overlay = this.overlayService.open({
      content: ContactsComponent,
      options: {
        data: {
          title: 'Add users to your new group',
          form: data,
          addUserstoGroup: true,
          contacts: this.contacts,
        },
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) {
        await this.service.addGroup(data);
      }
    });
  }

  showContacts() {
    const overlay = this.overlayService.open({
      content: ContactsComponent,
      options: {
        data: {
          title: 'Contacts',
          contacts: this.contacts,
          existingChats: this.chats.filter((chat) => !chat.chatroom),
        },
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) {
        if (data.chat_id) { 
          this.selectChat({
            id: data.chat_id,
          });
        } else {
          this.sendFirstMessage(data);
        }
      }
    });
  }

  sendFirstMessage(user: User) {
    const overlay = this.overlayService.open({
      content: DraftMessageComponent,
      options: {
        data: {
          title: `Send a message to @${user.handle}`,
          drafted_to: user,
          form: new FormGroup({
            chatroom: new FormControl(false),
            to: new FormControl(user.id),
            message: new FormControl(''),
          }),
        },
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) {
        await this.sendMessage(data);
      }
    });
  }

  selectChat(chat: any): void {
    this.currentChat = null;
    this.state = {
      loading: true,
      loadingChatId: chat.id,
    };
    this.service.selectChat(chat.id); 
  }

  async sendMessage(form: FormGroup): Promise<void> {
    if (form.value.chat) {
      await this.service.sendMessage(form.value);
      form.get('message')?.reset();
    } else { 
      const res = await this.service.sendFirstMessage(form);
      if (res && (res as any).success) { 
        this.service.chats.next((res as any).data.chats);
        this.selectChat((res as any).data.currentChat);
      }
    }
  }
}
