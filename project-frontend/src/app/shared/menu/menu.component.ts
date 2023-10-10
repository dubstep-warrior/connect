import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { Base } from 'src/app/core/directives/base.directive';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends Base implements OnInit {
  @Input() user: any;
  selectedOption: string = '';
  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events.pipe( 
      filter(event => event instanceof NavigationStart),
      distinctUntilChanged(),
      this.takeUntilDestroy()
    ).subscribe(val => {
      this.selectedOption = (val as any).url.replace('/', '')
    });
  }

  logout() {
    this.authService.logout();
  }
}
