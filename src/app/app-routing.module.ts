import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RecupComponent } from './recup/recup.component';
import { HomeComponent } from './home/home.component';
import { RecupdataComponent } from './recupdata/recupdata.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recup', component: RecupComponent },
  { path: 'recup1/:id', component: RecupComponent },
  { path: 'form', component: FormComponent },
  { path: 'api', component: RecupdataComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
export class AppRoutingModule { }
