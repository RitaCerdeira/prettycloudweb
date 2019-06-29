import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceSalonsComponent} from './components/service-salons/service-salons.component';
import {SalonsComponent} from './components/salons/salons.component';
import {SalonDetailsComponent} from './components/salon-details/salon-details.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'service/:num', component: ServiceSalonsComponent},
    {path: 'salons', component: SalonsComponent},
    {path: 'salon/:num', component: SalonDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
