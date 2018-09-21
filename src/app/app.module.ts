import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './components/home-pages/home-pages.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePagesComponent } from './components/private-pages/private-pages.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';



// Servicios


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePagesComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
