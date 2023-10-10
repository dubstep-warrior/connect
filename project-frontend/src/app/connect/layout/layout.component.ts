import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/core/directives/base.directive';
import { User } from 'src/app/core/interface/user';
import { ConnectService } from 'src/app/services/connect/connect.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends Base implements OnInit {
  model: Array<User>;
  displayModel: Array<User>;
  selectedTitle: string = 'find'; 
  search: string = ''
  constructor(private service: ConnectService) {
    super();
  }

  titles: any = {
    find: 'Find new connections',
    outgoing: 'Outgoing requests',
    incoming: 'Incoming requests',
    current: 'Current connections'
  }

  displaySearchedUsers(event: any): void {
    this.displayModel = this.model.filter(user => user.handle.toLowerCase().includes(event.target.value))
  }

  async ngOnInit(): Promise<void> { 
    this.service.model.pipe(this.takeUntilDestroy()).subscribe((data) => {
      this.model = data; 
      this.displayModel = this.model.filter(user => user.handle.toLowerCase().includes(this.search))
    });
    await this.service.retrieveConnects(); 
  } 

  async addUser(user: User) {
    await this.service.addUser(user);
  }

  async confirmRequest(user: User, action: string){
    await this.service.confirmRequest(user, action,this.selectedTitle)
  }

  async selectTitle(title: string): Promise<void> {
    this.selectedTitle = title
    this.search = ''
    await this.service.retrieveConnects(title);
  }
}
