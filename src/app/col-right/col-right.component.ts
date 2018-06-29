import { Component, OnInit, Input} from '@angular/core';
import { MonObj } from '../util/MonObj';

@Component({
  selector: 'app-col-right',
  templateUrl: './col-right.component.html',
  styleUrls: ['./col-right.component.css']
})
export class ColRightComponent implements OnInit {
  title = 'col-right'
  colRight = new MonObj("colRight", 333)
  constructor() { }

  ngOnInit() {
  }

  @Input() maPropImport: any;
}
