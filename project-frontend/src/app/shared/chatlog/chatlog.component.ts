import { AfterViewChecked, OnInit, Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/interface/user';

@Component({
  selector: 'app-chatlog',
  templateUrl: './chatlog.component.html',
  styleUrls: ['./chatlog.component.scss']
})
export class ChatlogComponent implements AfterViewChecked{
  @Input() currentChat: any;
  @Input() user: User; 
  @ViewChild('chatLog') private myScrollContainer: ElementRef;
  chatLength: number = 0;
 

  ngAfterViewChecked(): void {   
    if(!this.currentChat || this.chatLength !== this.currentChat?.messages.length) {
      this.scrollToBottom(); 
      this.chatLength = this.currentChat?.messages.length
    } 
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
}
