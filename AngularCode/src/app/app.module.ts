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
      import { ProjectProjectComponent } from './Components/public/Content/Project/projects/project.project.component'

      import { AllProjectsComponent } from './Components/public/Content/Project/all/allProjects.component';
      import { WebsiteProjectComponent } from './Components/public/Content/Project/projects/website/website.project.component';
      import { Phase7ProjectComponent } from './Components/public/Content/Project/projects/phase7/phase7.project.component';
      import { IntershipsProjectComponent } from './Components/public/Content/Project/projects/interships/interships.project.component';
      import { ZeusEntertainmentProjectComponent } from './Components/public/Content/Project/projects/zeusentertainment/zeusentertainment.project.component';
      import { UnityProjectComponent } from './Components/public/Content/Project/projects/unity/unity.project.component';
    import { AboutmeComponent } from './Components/public/Content/AboutMe/aboutme.component';
  import { privateMainComponent } from './Components/private/main/privateMainComponent';
import { TransfereService } from './services/transferService.service';

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
          ProjectProjectComponent,

          AllProjectsComponent,
          WebsiteProjectComponent,
          Phase7ProjectComponent,
          IntershipsProjectComponent,
          ZeusEntertainmentProjectComponent,
          UnityProjectComponent,
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
    appRoutingProviders,
    TransfereService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
