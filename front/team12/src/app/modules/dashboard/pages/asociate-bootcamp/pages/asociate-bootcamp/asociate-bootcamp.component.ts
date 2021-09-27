import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bootcamp } from 'src/app/core/models/bootcamp/bootcamp';
import { BootcampService } from 'src/app/core/services/bootcampService/bootcamp.service';

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
    this.bootcampService.get('api/emmpresa/bootcamp/' + id).subscribe((res) => {
      console.log(res);
      // this.data = res;
    });
  }

}
