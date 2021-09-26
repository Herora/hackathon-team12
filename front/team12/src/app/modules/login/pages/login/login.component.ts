import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup?: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.formGroup = this.fb.group({
      email: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ]),
      iscompany: new FormControl(false)
    });
  }

  public clickRegister(state: boolean): void {
    sessionStorage.setItem('isCompany', state + '');
    this.router.navigate(['/register']);
  }

  public clickLogin() {
    console.log(this.formGroup?.value, this.formGroup?.valid);
  }

}
