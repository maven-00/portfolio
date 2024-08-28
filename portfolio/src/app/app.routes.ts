import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent }
];
