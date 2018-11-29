import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { mainComponent } from './Components/public/main/mainComponent';
import { privateMainComponent } from './Components/private/main/privateMainComponent';
import { LoginComponent } from './Components/public/login/login.component';

import { AuthGuard } from './guards/auth-guard.service';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    privateMainComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    HttpClientModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
			{ path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: mainComponent },
      { path: 'private', component: privateMainComponent, canActivate: [AuthGuard], },			
    ]),    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [JwtHelper, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
