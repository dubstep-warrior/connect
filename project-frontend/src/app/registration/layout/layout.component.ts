import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Base } from 'src/app/core/directives/base.directive';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends Base implements OnInit {
  constructor(private service: RegistrationService) {
    super();
  }
  errors: any;
  async ngOnInit(): Promise<void> {
    this.service.errors.pipe(this.takeUntilDestroy()).subscribe((err) => {
      this.errors = err;
    });
  }

  parsedKey(key: any): string {
    return String(key);
  }
}
