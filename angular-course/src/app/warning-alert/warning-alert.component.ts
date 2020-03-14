import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  numVulnerabilities: Number;
  stSeverity: String;

  constructor() {
    this.numVulnerabilities = Math.floor(Math.random() * 20) + 1;
    this.stSeverity = this.numVulnerabilities < 10 ? 'LOW' : 'SEVERE';
  }

  ngOnInit(): void {
  }

  getParagraphStyle() {
    return { fontWeight: this.numVulnerabilities > 9 ? 'bold' : 'normal' }
  }

}
