import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/core/models/bootcamp/bootcamp';
import { User } from 'src/app/core/models/user/user';
import { BootcampService } from 'src/app/core/services/bootcampService/bootcamp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isCompany = false;
  public bootcamps: Bootcamp[] = [];
  public user?: User;
  public createBootcamp = false;
  public actionSearch = '1';

  constructor(private bootcamService: BootcampService) { }

  ngOnInit(): void {
    this.isCompany = sessionStorage.getItem('isCompany') === 'true';
    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser);
    }
    this.allBootcamps(true);
  }

  public changeHome(event: any): void {
    this.actionSearch = event.value;
    switch (event.value) {
      case '1':
        this.allBootcamps(true);
        break;
      case '2':
        this.allBootcamps(false);
        break;

      default:
        break;
    }
  }

  private allBootcamps(id?: boolean): void {
    let url = `api/${this.isCompany ? 'empresa' : 'user' }${!id ? '/' + this.user?._id : ''}`;
    console.log(url);
    this.bootcamService.get(url).subscribe((bootcamps: Bootcamp[]) => {
      this.bootcamps = bootcamps;
    });
  }

  public actionBootcamp(event: any): void {
    console.log(event);
    if (event.cancel) {
      this.createBootcamp = false;
    }
    if (event.load) {
      this.allBootcamps(this.actionSearch === '1');
    }
  }

}
