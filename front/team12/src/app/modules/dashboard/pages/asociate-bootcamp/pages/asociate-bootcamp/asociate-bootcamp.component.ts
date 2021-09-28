import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bootcamp } from 'src/app/core/models/bootcamp/bootcamp';
import { User } from 'src/app/core/models/user/user';
import { BootcampService } from 'src/app/core/services/bootcampService/bootcamp.service';
import { UserService } from 'src/app/core/services/userService/user.service';

@Component({
  selector: 'app-asociate-bootcamp',
  templateUrl: './asociate-bootcamp.component.html',
  styleUrls: ['./asociate-bootcamp.component.scss']
})
export class AsociateBootcampComponent implements OnInit {

  public data: Bootcamp = {};
  constructor(private route: ActivatedRoute,
    private bootcampService: BootcampService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bootcampService.getId('api/empresa/bootcamp/' + id).subscribe((res) => {
      const tt: any = res.users;
      console.log(res);
      this.data = res;
      this.data.tempusers = tt;
      console.log(this.data);
    });
  }

}
