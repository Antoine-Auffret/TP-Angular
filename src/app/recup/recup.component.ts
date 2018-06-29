import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonObj } from '../util/MonObj';

@Component({
  selector: 'app-recup',
  templateUrl: './recup.component.html',
  styleUrls: ['./recup.component.css']
})
export class RecupComponent implements OnInit {
  monId: any;

  constructor(private maRoute: ActivatedRoute) { }

  ngOnInit() {
    this.monId = this.maRoute.snapshot.paramMap.get('id');
  }

  Recup = new MonObj(this.monId, 333)
}
