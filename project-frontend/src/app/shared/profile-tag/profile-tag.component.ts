import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/interface/user';

@Component({
  selector: 'app-profile-tag',
  templateUrl: './profile-tag.component.html',
  styleUrls: ['./profile-tag.component.scss']
})
export class ProfileTagComponent {
  @Input() config = 'profile'
  @Input() user: User
  @Input() post: any = null
  @Input() status: boolean = false;
  @Input() profile_details: boolean = false;
  @Input() isCurrentUser: boolean = false;
  @Output() editModeEvent = new EventEmitter<any>();
 
  editMode: boolean = false;

  editProfileDetails(submit: boolean) {
    this.editMode = !this.editMode; 
    this.editModeEvent.emit({
      editMode: this.editMode,
      submit: submit
    });
  }
}
