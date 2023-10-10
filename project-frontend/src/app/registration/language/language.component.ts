import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  form: FormGroup;
  learningLanguageOptions: any;
  learningLanguages: any = {
    en: 'English',
    jp: 'Japanese',
    kr: 'Korean',
  };
  constructor(private service: RegistrationService, private router: Router) {
    if (this.service.form.controls['info'].invalid)
      this.router.navigate(['../registration/user-information']);
    this.form = this.service.form.get('languages') as FormGroup;
  }

  async submitRegistration() {
    await this.service.registerUser();
  }

  selectedNative() {
    this.learningLanguageOptions = null;
    this.learningLanguageOptions = ['en', 'jp', 'kr'].filter(
      (lang) => lang !== this.form.value['native']
    );
  }

  parsedKey(key: any) {
    return String(key);
  }
}
