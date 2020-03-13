import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-farm',
  templateUrl: './server-farm.component.html',
  styleUrls: ['./server-farm.component.css']
})
export class ServerFarmComponent implements OnInit {

  serverName: String = '';
  serverCreated: Boolean = false;
  servers = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push('');
    this.serverCreated = true;
  }

  onChangeServerName() {
    this.serverCreated = false;
  }

}
