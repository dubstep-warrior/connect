import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  form: FormGroup;
  preview_img: string = '';
  constructor(private service: RegistrationService, private router: Router) {
    if (this.service.form.controls['basic_info'].invalid)
      this.router.navigate(['../registration']);
    this.form = this.service.form.get('info') as FormGroup;
  }

  uploadFile(event: Event) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    this.preview_img = URL.createObjectURL(file as Blob);
    this.form.patchValue({
      profile_img: file,
    });  
  }
}
