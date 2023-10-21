import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpoint_url_backend_api;
  }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {},
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    }).catch((err) => { 
      return { success: false, error: err };
    });
  }

  login(event: any): any {
    return this.request('POST', `${this.url}/accounts/api/auth/`, event);
  }

  register(event: any): any {
    return this.request('POST', `${this.url}/accounts/api/register/`, event);
  }

  profile(id: any): any {
    return this.request('GET', `${this.url}/accounts/profile/${id}`);
  }

  updateProfile(event: any): any {
    return this.request('PUT', `${this.url}/accounts/profile/`, event);
  }

  post(event: any): any {
    return this.request('POST', `${this.url}/feed/api/post/`, event);
  }

  feed(number: any = ''): any {
    return this.request('GET', `${this.url}/feed/api/post/${number}`);
  }

  likePost(method: string, event: any): any {
    return this.request(method, `${this.url}/feed/api/like_post/`, event);
  }

  addComment(event:any): any {
    return this.request('POST', `${this.url}/feed/api/comment/`, event);
  }

  retrieveConnects(title: string = ''): any {
    return this.request('GET', `${this.url}/connect/api/possible_connects/${title}`);
  }

  addUser(event:any): any {
    return this.request('POST', `${this.url}/connect/api/add/`, event);
  }

  confirmRequest(event:any, action: string): any {
    return this.request('DELETE', `${this.url}/connect/api/confirm/${action}`, event);
  }

  contacts(): any {
    return this.request('GET', `${this.url}/chat/api/chat/`);
  }
  
  addGroup(event: any) {
    return this.request('POST', `${this.url}/chat/api/chat/`, event);
  }

  sendMessage(event: any) {
    return this.request('POST', `${this.url}/chat/api/message/`, event);
  } 
}
