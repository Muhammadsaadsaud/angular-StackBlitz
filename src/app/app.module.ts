import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';
import {EncrDecrService} from './EncrDecrService/encr-decr-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ConfigurationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: ' ', component: AppComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'signin', component: SignInFormComponent },
      { path: 'signup', component: SignUpFormComponent },
      { path: 'configuration', component: ConfigurationPageComponent }
    ])
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent, SignInFormComponent, SignUpFormComponent, HomepageComponent]
})
export class AppModule { }
