import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bootcamp } from 'src/app/core/models/bootcamp/bootcamp';
import { User } from 'src/app/core/models/user/user';
import { AlertsCustomService } from 'src/app/core/services/alertsCustom/alerts-custom.service';
import { BootcampService } from 'src/app/core/services/bootcampService/bootcamp.service';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {
  @Input() bootcamp?: Bootcamp;
  @Input() actions = false;
  @Input() create = false;
  @Output() public resultBootcamp = new EventEmitter<{ cancel?: boolean, load?: boolean }>();
  
  public user?: User;
  public formGroup?: FormGroup;
  public isCompany = false;

  constructor(private fb: FormBuilder,
    private bootcamService: BootcampService,
    private alertCustom: AlertsCustomService) {}

  ngOnInit(): void {
    this.isCompany = sessionStorage.getItem('isCompany') === 'true';
    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser);
    }
    if (this.create) {
      this.initFormGroup();
    }
  }

  public initFormGroup(): void {
    this.formGroup = this.fb.group({
      title: new FormControl(this.bootcamp ? this.bootcamp.title : null, [Validators.required]),
      description: new FormControl(this.bootcamp ? this.bootcamp.description : null, [Validators.required])
    });
  }

  public actionCloseEdit(): void {
    if (this.bootcamp) {
      this.bootcamp.edit = false;
    }
    if (this.create) {
      this.create = false;
    }
    this.resultBootcamp.emit({ cancel: true });
  }

  public bootcampSaveEdit(): void {
    if (this.formGroup?.valid) {
      this.selectEndPoint();
    } else {
      this.alertCustom.AlertCustom({ title: 'Alert', message: 'Por favor ingresar los datos correctamente', type: 'alert' });
    }
  }

  private selectEndPoint(): void {
    if (this.bootcamp?.edit) {
      this.editBootcamp();
    } else {
      this.saveBootcamp();
    }
  }

  private editBootcamp(): void {
    this.bootcamService.put(`api/empresa/${this.bootcamp?._id}`, { title: this.formGroup?.get('title')?.value, description: this.formGroup?.get('description')?.value }).subscribe((res) => {
      console.log(res);
      this.resultBootcamp.emit({ load: true });
    });
  }

  private saveBootcamp(): void {
    this.bootcamService.post(`api/empresa/${this.user?._id}`, { title: this.formGroup?.get('title')?.value, description: this.formGroup?.get('description')?.value }).subscribe((res) => {
      console.log(res);
      this.resultBootcamp.emit({ cancel: true });
    });
  }

  public deleteBootcamp() {
    this.bootcamService.delete(`api/empresa/${this.bootcamp?._id}`, true).subscribe((res) => {
      console.log(res);
      this.resultBootcamp.emit({ load: true });
    }, error => {      
      if (error.status === 200) {
        this.resultBootcamp.emit({ load: true });
      }
    });
  }

  public annotated(): void {
    if (this.user) {
      this.bootcamService.post(`api/user/${this.bootcamp?._id}` , { email: this.user.email }).subscribe(() =>{
        this.resultBootcamp.emit({ load: true });
      }, error => {
        if (error.status === 201) {
          this.resultBootcamp.emit({ load: true });
        }
      });
    }
  }

}
