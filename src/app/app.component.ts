import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public dataMenu: any;
  constructor(
    private sData: DataService
  ) { }

  ngOnInit() {
    this.dataMenu = this.sData.getData();
  }

}