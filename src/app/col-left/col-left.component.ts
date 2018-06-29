import { Component, OnInit } from '@angular/core';
import { MonObj } from '../util/MonObj';

@Component({
  selector: 'app-col-left',
  templateUrl: './col-left.component.html',
  styleUrls: ['./col-left.component.css']
})
export class ColLeftComponent implements OnInit {
  title = 'col-left'
  colLeft = new MonObj("colLeft", 666)
  constructor() { }

  ngOnInit() {
  }

}
