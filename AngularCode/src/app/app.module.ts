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
    import { AboutmeComponent } from './Components/public/Content/AboutMe/aboutme.component';
  import { privateMainComponent } from './Components/private/main/privateMainComponent';
    import { privateHeaderComponent } from './Components/private/header/privateHeaderComponent';
    import { privateHomeComponent } from './Components/private/content/home/privateHomeComponent';
    import { privateAllProjectsComponent } from './Components/private/content/allProjects/privateAllProjectsComponent';
    import { privateSettingsComponent } from './Components/private/content/settings/privateSettingsComponent';
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
        AboutmeComponent,        
      privateMainComponent,
        privateHeaderComponent,
        privateHomeComponent,
        privateAllProjectsComponent,        
        privateSettingsComponent
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
