import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/core/interface/user';
import { ServerService } from '../server/server.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  model: Subject<any> = new Subject();
  constructor(private service: ServerService) {}

  async retrieveConnects(title?: string) {
    const res = await this.service.retrieveConnects(title);
    if (res.success && res.data) {
      this.model.next(res.data);
    }
  }

  async addUser(user: User) {
    const res = await this.service.addUser({ request_to: user.id });
    if (res.success && res.data) {
      await this.retrieveConnects();
    }
  }

  async confirmRequest(user: User, action: string, title?: string) {
    const res = await this.service.confirmRequest(
      { request_from: user.id },
      action
    ); 
    if (res && res.success) { 
      await this.retrieveConnects(title);
    }
  }
}
