import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth.service';
import {CookieService} from 'angular2-cookie/core';
import {BsDropdownModule} from 'ngx-bootstrap';
import {TooltipModule} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceSalonsComponent } from './components/service-salons/service-salons.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AlertComponent,
    ServicesComponent,
    ServiceSalonsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientModule,
        HttpClientXsrfModule,
        CookieModule.forRoot(),
        NgbModule,
    ],
    exports: [
        BsDropdownModule,
        TooltipModule,
        ModalModule
    ],
  providers: [
      AuthService,
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
