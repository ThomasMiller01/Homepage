import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { mainComponent } from './Components/public/main/mainComponent';
import { privateMainComponent } from './Components/private/main/privateMainComponent';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    privateMainComponent,
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot([
			{ path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: mainComponent },
      { path: 'private', component: privateMainComponent },			
    ]),    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
