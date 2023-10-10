import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable, Observer, Subject,  } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService implements OnDestroy {
  connection$: WebSocketSubject<any> | null;

  constructor(private authService: AuthService) {} 

  connect(url:string): Observable<any> {
    if (this.connection$) {
      return this.connection$;
    } else {
      this.connection$ = webSocket(url);
      return this.connection$;
    }
  }

  send(data: any) {
    if (this.connection$) {
      const payload = {
        token: this.authService.token,
        ...data,
      };
      this.connection$.next(payload);
    }
  }

  closeConnection() {
    if (this.connection$) {
      this.connection$.complete();
      this.connection$ = null;
    }
  }

  ngOnDestroy() {
    this.closeConnection();
  } 
}
