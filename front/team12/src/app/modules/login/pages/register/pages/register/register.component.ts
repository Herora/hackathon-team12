import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/core/models/countries/countries';
import { CountriesService } from 'src/app/core/services/CountriesServices/countries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup?: FormGroup;
  public countries: Country[] = [];
  constructor(private fb: FormBuilder, private coutriesServices: CountriesService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: new FormControl(null, [ Validators.required ]),
      email: new FormControl(null, [ Validators.required ]),
      linkedin: new FormControl(null, [ Validators.required ]),
      country: new FormControl(null, [ Validators.required ]),
      repository: new FormControl(null, [ Validators.required ]),
      site: new FormControl(null, [ Validators.required ]),
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

}
