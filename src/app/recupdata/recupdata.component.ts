import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-recupdata',
  templateUrl: './recupdata.component.html',
  styleUrls: ['./recupdata.component.css']
})
@Injectable()
export class RecupdataComponent {
  constructor(private http: Http){}
  valueRetour: any;

  //methode appelée à chaque appel du composant
  ngAfterViewInit(){
    this.doGET();
  }
  // methode réalisant l'appel au web service et insérant la réponse
  // dans une variable définie avant
  doGET() {
    console.log("GET");
    let url = 'http://ville.api.isen­-ouest.fr/api/list/countries';
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http.get(url).subscribe(res => this.valueRetour = res.json());
  }
}
