import { Component } from '@angular/core';
import { MonObj } from './util/MonObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  passVar:any = { val1:'valeur de test 11', val2:'autre valeur de test (2)'};
}
