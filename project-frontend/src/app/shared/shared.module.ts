import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { ImageComponent } from './image/image.component';
import { ProfileTagComponent } from './profile-tag/profile-tag.component';
import { OverlayModalModule } from './overlay-modal/overlay-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAsAgoPipe } from '../core/pipes/date-as-ago/date-as-ago.pipe';
import { SafeUrlPipe } from '../core/pipes/safe-url/safe-url.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { DraftMessageComponent } from './draft-message/draft-message.component';
import { ChatlogComponent } from './chatlog/chatlog.component';
import { AddGroupComponent } from './add-group/add-group.component';

@NgModule({
  declarations: [
    FeedComponent,
    ImageComponent,
    MenuComponent,
    ProfileTagComponent, 
    PostComponent,
    DateAsAgoPipe,
    SafeUrlPipe,
    ContactsComponent,
    DraftMessageComponent,
    ChatlogComponent,
    AddGroupComponent
  ],
  imports: [
    CommonModule,
    OverlayModalModule, 
    HttpClientModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FeedComponent,
    ImageComponent,
    MenuComponent,
    ProfileTagComponent, 
    PostComponent,
    DateAsAgoPipe,
    SafeUrlPipe,
    ChatlogComponent
  ]
})
export class SharedModule { }
