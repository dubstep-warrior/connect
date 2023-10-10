import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { InfoComponent } from './info/info.component';
import { LanguageComponent } from './language/language.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    InfoComponent,
    LanguageComponent,
    BasicInfoComponent, 
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule
  ],
})
export class RegistrationModule {}
