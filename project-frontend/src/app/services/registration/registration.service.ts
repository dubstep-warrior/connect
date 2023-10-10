import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ServerService } from '../server/server.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  form: FormGroup;
  errors: Subject<any> = new Subject();
  constructor(private service: ServerService, private authService: AuthService) {
    this.form = new FormGroup({
      basic_info: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', Validators.required),
      }),
      info: new FormGroup({
        handle: new FormControl('', Validators.required),
        description: new FormControl(''),
        profile_img: new FormControl(''),
      }),
      languages: new FormGroup({
        native: new FormControl(''),
        learning: new FormControl('')
      })
    });
  }

  async registerUser() {
    this.errors.next([])
    let formData = new FormData(); 
    if(this.form.invalid) return;
    Object.keys(this.form.value).forEach(group => {
      Object.keys(this.form.value[group]).forEach(key => { 
        formData.append(key, this.form.value[group][key])
        });
    });  
    const res = await this.service.register(formData) 
    if(res && res.success){
      await this.authService.login(formData.get('email') as string, formData.get('password') as string)
    } else if (res.error) { 
      this.errors.next(res.error.error)
    }
  }
}
