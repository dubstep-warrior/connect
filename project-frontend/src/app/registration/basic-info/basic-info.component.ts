import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  form: FormGroup;
  constructor(private service: RegistrationService) {
    this.form = this.service.form.get('basic_info') as FormGroup;
  }
}
