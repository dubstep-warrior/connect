import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile/:id', component: ProfileComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
   
  {
    path:'registration', loadChildren: () =>
    import('./registration/registration.module').then(
      (m) => m.RegistrationModule
    )
  },
  {
    path:'connect', loadChildren: () =>
    import('./connect/connect.module').then(
      (m) => m.ConnectModule
    )
  },
  {
    path:'chat', loadChildren: () =>
    import('./chat/chat.module').then(
      (m) => m.ChatModule
    )
  },
  {
    path: '', component: FeedPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
