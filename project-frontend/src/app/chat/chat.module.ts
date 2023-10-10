import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [  
    LayoutComponent
  ],
  imports: [
    ChatRoutingModule,
    CommonModule, 
    SharedModule,
    MatIconModule,
    MatMenuModule,
    PortalModule ,
    ReactiveFormsModule, 
    MatProgressSpinnerModule
  ]
})
export class ChatModule { }
