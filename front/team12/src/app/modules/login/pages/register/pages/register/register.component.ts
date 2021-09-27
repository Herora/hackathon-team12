import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/core/models/countries/countries';
import { User } from 'src/app/core/models/user/user';
import { AlertsCustomService } from 'src/app/core/services/alertsCustom/alerts-custom.service';
import { CountriesService } from 'src/app/core/services/countryServices/countries.service';
import { UserService } from 'src/app/core/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup?: FormGroup;
  public countries: Country[] = [];
  public isCompany: boolean = false;
  public hide: boolean = true;
  public hide2: boolean = true;
  constructor(private fb: FormBuilder,
              private coutriesServices: CountriesService,
              private alertCustom: AlertsCustomService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.isCompany = sessionStorage.getItem('isCompany') === 'true';
    this.formGroup = this.fb.group({
      name: new FormControl(null, [ Validators.required ]),
      email: new FormControl(null, [ Validators.required ]),
      linkedin: new FormControl(null, [ Validators.required ]),
      country: new FormControl(null, [ Validators.required ]),
      repository: new FormControl(null),
      site: new FormControl(null),
      password: new FormControl(null, [ Validators.required ]),
      confirmPassword: new FormControl(null, [ Validators.required ]),
      description: new FormControl(null, [ Validators.required ])
    });
    this.coutriesServices.get('').subscribe((countries: Country[]) => {
      countries.forEach(country => {
        this.countries.push(country);
      });
    });
    
  }

  public clickRegistry(): void {
    if (this.formGroup?.valid ) {
      const password = this.formGroup?.get('password')?.value;
      const confirmpassword = this.formGroup?.get('confirmPassword')?.value;
      if (password === confirmpassword) {
        const user: User = {
          name: this.formGroup?.get('name')?.value,
          email: this.formGroup?.get('email')?.value,
          linkedin: this.formGroup?.get('linkedin')?.value,
          country: this.formGroup?.get('country')?.value,
          repository: this.formGroup?.get('repository')?.value,
          site: this.formGroup?.get('site')?.value,
          password: this.formGroup?.get('password')?.value,
          description: this.formGroup?.get('description')?.value
        };
        this.userService.post(`api/${this.isCompany ? 'empresa' : 'user' }/register`, user).subscribe((user: User) => {
          console.log(user);
          // if (login.token) {
          //   sessionStorage.setItem('token', login.token);
          //   sessionStorage.setItem('isCompany', this.formGroup?.controls['iscompany'].value);
          //   this.router.navigate(['/dashboard']);
          // }
          this.router.navigate(['/']);
          this.alertCustom.AlertCustom({ title: 'Alerta', message: 'Se creo correctamente el usuario.', type: 'success' });
        }, error => {
          this.alertCustom.AlertCustom({ title: 'Alerta', message: error.error });
        });
      } else {
        this.alertCustom.AlertCustom({ title: 'Alerta', message: 'La contraseña y la confirmación no son iguales' });
      }
    } else {
      console.log('¿asddas')
      this.alertCustom.AlertCustom({ title: 'Alerta', message: 'Por favor diligencia todos los datos correctamente.' });
    }
  }

}
