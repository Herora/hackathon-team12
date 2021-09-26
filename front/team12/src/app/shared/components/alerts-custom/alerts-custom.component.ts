import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-custom',
  templateUrl: './alerts-custom.component.html',
  styleUrls: ['./alerts-custom.component.scss']
})
export class AlertsCustomComponent implements OnInit {

  public viewAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

}
