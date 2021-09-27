import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login/login';
import { AlertsCustomService } from 'src/app/core/services/alertsCustom/alerts-custom.service';
import { LoginService } from 'src/app/core/services/loginServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public formGroup?: FormGroup;
  public isCompany = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private loginService: LoginService,
              private alertCustom: AlertsCustomService) { }

  ngOnInit(): void {
    this.isCompany = sessionStorage.getItem('isCompany') === 'true';
    this.formGroup = this.fb.group({
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null, [ Validators.required ]),
      iscompany: new FormControl(this.isCompany)
    });
  }

  public clickRegister(state: boolean): void {
    sessionStorage.setItem('isCompany', state + '');
    this.router.navigate(['/register']);
  }

  public clickLogin() {
    if (this.formGroup?.valid) {
      const login: Login = {
        email: this.formGroup?.get('email')?.value,
        password: this.formGroup?.get('password')?.value
      };
      console.log('hola');
      this.loginService.post(`api/${this.formGroup?.controls['iscompany'].value ? 'empresa' : 'user' }/login`, login).subscribe((login: Login) => {
        if (login.token) {
          console.log(login);
          sessionStorage.setItem('token', login.token);
          sessionStorage.setItem('isCompany', this.formGroup?.controls['iscompany'].value);
          localStorage.setItem('user', JSON.stringify(login.user));
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        this.alertCustom.AlertCustom({ title: 'Alerta', message: error.error, type: 'alert' });
      });
    } else {
      this.alertCustom.AlertCustom({ title: 'Alerta', message: 'Por favor diligencia todos los datos correctamente', type: 'alert' });
    }
  }

}
