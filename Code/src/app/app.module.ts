import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth-guard.service';
import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { mainComponent } from './Components/public/main/mainComponent';
import { privateMainComponent } from './Components/private/main/privateMainComponent';
import { LoginComponent } from './Components/public/login/login.component';
import { FooterComponent } from './Components/public/footer/footer.component';
import { ImpressumComponent } from './Components/public/Content/Impressum/impressum.component';
import { HeaderComponent } from './Components/public/header/header.component';
import { HomeComponent } from './Components/public/Content/Home/home.components';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    privateMainComponent,
    LoginComponent,
    FooterComponent,
    ImpressumComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    HttpClientModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
			{ path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: mainComponent,
        children: [
          { path: 'home', component: HomeComponent, outlet:'content' },
          { path: 'impressum', component: ImpressumComponent, outlet:'content' },
        ] 
      },
      { path: 'private', component: privateMainComponent, canActivate: [AuthGuard], },			
    ]),    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [JwtHelper, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
