import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Base } from '../core/directives/base.directive';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Base implements OnInit{
  form: FormGroup;
  err: any;
  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit():void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required])
    })
    this.authService.error.pipe(this.takeUntilDestroy()).subscribe(err => {
      this.err = err;
    })
  }

  async onSubmit(): Promise<void> {
    this.err = null;
    await this.authService.login(this.form.controls['username'].value, this.form.controls['password'].value)
  }
}
