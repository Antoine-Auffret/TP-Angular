import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TpbodyComponent } from './tpbody/tpbody.component';
import { ColLeftComponent } from './col-left/col-left.component';
import { ColRightComponent } from './col-right/col-right.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { RecupComponent } from './recup/recup.component';
import { HomeComponent } from './home/home.component';
import { RecupdataComponent } from './recupdata/recupdata.component';

@NgModule({
  declarations: [
    AppComponent,
    TpbodyComponent,
    ColLeftComponent,
    ColRightComponent,
    FormComponent,
    RecupComponent,
    HomeComponent,
    RecupdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
