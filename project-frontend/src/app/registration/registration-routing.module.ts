import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InfoComponent } from './info/info.component';
import { LanguageComponent } from './language/language.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'user-information',
            component: InfoComponent,
          },
      {
        path: '',
        component: BasicInfoComponent,
      }, 
      {
        path: 'user-languages',
        component: LanguageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
