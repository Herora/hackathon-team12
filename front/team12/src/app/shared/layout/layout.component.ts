import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public user?: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const u = localStorage.getItem('user');
    if (u) {
      this.user = JSON.parse(u);
    }
  }

  public logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
