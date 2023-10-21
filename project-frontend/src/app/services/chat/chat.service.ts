import { Injectable } from '@angular/core';
import { User } from 'src/app/core/interface/user';
import { ServerService } from '../server/server.service';
import { map, Observable, Observer, Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Base } from 'src/app/core/directives/base.directive';
import { WebSocketService } from '../websocket/web-socket.service';
import { FormGroup } from '@angular/forms';

const CHAT_URL = 'ws://localhost:8000/ws/';

@Injectable({
  providedIn: 'root',
})
export class ChatService extends Base {
  user: Subject<User> = new Subject();
  contacts: Subject<Array<User>> = new Subject();
  chats: Subject<Array<any>> = new Subject();
  currentChat: Subject<any> = new Subject();

  public messages: Subject<any> = new Subject();
  currentSub: any;

  constructor(private service: ServerService, private wsService: WebSocketService) {
    super();
  }

  async retrieveContacts(): Promise<void> {
    const res = await this.service.contacts(); 
    if (res && res.success) {
      this.user.next(res.data.user);
      this.contacts.next(res.data.contacts); 
      this.chats.next(res.data.chats);
    }
  }

  async sendMessage(data: any): Promise<void> { 
    this.wsService.send(data); 
  }

  async sendFirstMessage(data: any) {
    const res = await this.service.sendMessage(this.parsedForm(data));
    return res;
  }

  async addGroup(data: any): Promise<void> { 
    const res = await this.service.addGroup(this.parsedForm(data));
    if (res && (res as any).success) {
      await this.retrieveContacts(); 
    }
  }

  parsedForm(form: FormGroup): FormData {
    const formData = new FormData();
    Object.keys(form.value).forEach((key) => {
      formData.append(key, (form.value as any)[key]);
    });
    return formData;
  }

  selectChat(id: number): void {
    //connect
    this.wsService.closeConnection();
    this.wsService.connect(`${CHAT_URL}${id}/?token=${JSON.parse(localStorage.getItem('currentUser') as string)[
      'token'
    ]}`).pipe(
      this.takeUntilDestroy()
    ).subscribe(data => 
      { 
        if(data.type == 'connection') {
          this.currentChat.next(data.data)
        }
        if(data.type == 'chat_message') {
          this.messages.next(data.data)
        } 
      }); 
  } 

  closeChat() {
    this.wsService.closeConnection();
  }
}
