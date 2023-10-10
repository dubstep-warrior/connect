import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';
import { ServerService } from '../server/server.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  token: string | null;
  error: Subject<any> = new Subject();
  constructor(private http: HttpClient, private service: ServerService, private router: Router) { }

  async login(username: string, password: string) { 
    const res = await this.service.login({username, password})
    console.log(res)
    if(res && res.error) { 
      this.error.next(res.error.error)
    }
    if (res && res.token) {
      this.token = res.token;
      localStorage.setItem("currentUser", JSON.stringify(res));
      this.router.navigate(['../'])
    } 
    return res;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.token = null
    this.router.navigate(['../']) 
  }
}
