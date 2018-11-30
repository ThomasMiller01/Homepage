import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { routing, appRoutingProviders } from './routes/routes.module';
import { AuthGuard } from './guards/auth-guard.service';
import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
  import { mainComponent } from './Components/public/main/mainComponent';  
    import { LoginComponent } from './Components/public/login/login.component';
    import { FooterComponent } from './Components/public/footer/footer.component';
    import { ImpressumComponent } from './Components/public/Content/Impressum/impressum.component';
    import { HeaderComponent } from './Components/public/header/header.component';
    import { HomeComponent } from './Components/public/Content/Home/home.component';
      import { TopHomeComponent } from './Components/public/Content/Home/top/top-home.component';
      import { ContentHomeComponent } from './Components/public/Content/Home/content/content-home.component';
    import { ProjectsComponent } from './Components/public/Content/Project/projects.component';
    import { AboutmeComponent } from './Components/public/Content/AboutMe/aboutme.component';
  import { privateMainComponent } from './Components/private/main/privateMainComponent';

@NgModule({
  declarations: [
    AppComponent,
      mainComponent,      
        LoginComponent,
        FooterComponent,
        ImpressumComponent,
        HeaderComponent,
        HomeComponent,
          TopHomeComponent,
          ContentHomeComponent,
        ProjectsComponent,
        AboutmeComponent,        
      privateMainComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    HttpClientModule,
    HttpModule,
    CommonModule,
    routing
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    JwtHelper, 
    AuthGuard,
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
