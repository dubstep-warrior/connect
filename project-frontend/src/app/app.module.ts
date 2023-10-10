import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './connect/layout/layout.component';
import { FeedPageComponent } from './feed-page/feed-page.component'; 
import { SharedModule } from './shared/shared.module';

export let AppInjector: Injector;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,   
    LayoutComponent,
    FeedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MatIconModule,
    SharedModule, 
    BrowserAnimationsModule
  ],
  exports: [ 
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
