import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomOverlayRef } from 'src/app/core/classes/custom-overlay-ref';
import { User } from 'src/app/core/interface/user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  data: any;
  contacts: Array<User>;
  existingChats: Array<any>;
  addUserstoGroup: boolean = false;
  form: FormGroup;
  constructor(private overlayRef: CustomOverlayRef) {
    this.data = this.overlayRef.data.options.data; 
       
    this.addUserstoGroup = this.data.addUserstoGroup ?? false;
    if (this.addUserstoGroup) {
      this.form = this.data.form;
      this.contacts = this.data.contacts
    } 
    else if(this.data.title == 'Connections') {
      this.contacts = this.data.contacts
      console.log(this.contacts)
    }
    else {
      this.contacts = this.data.contacts.map((contact: User) => {  
        const chat = this.data.existingChats.find((chat: any) => !chat.chatroom && chat.to_user.id == contact.id)
        if(chat) {
          return {
            ...contact,
            chat_id: chat.id
          }
        } 
        return contact;
      });
    } 
  }

  selectContact(contact: User): void {
    this.overlayRef.close(contact);
  }

  submit() {
    this.form.patchValue({
      users: [
        ...new Set([
          ...this.form.value.users,
          ...this.contacts
            .filter((user) => user.isSelected)
            .map((user) => user.id),
        ]),
      ],
    });
    this.overlayRef.close(this.form);
  }
}
