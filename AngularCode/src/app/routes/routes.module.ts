import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

import { mainComponent } from '../Components/public/main/mainComponent';
import { privateMainComponent } from '../Components/private/main/privateMainComponent';
import { ImpressumComponent } from '../Components/public/Content/Impressum/impressum.component';
import { HomeComponent } from '../Components/public/Content/Home/home.component';
import { ProjectsComponent } from '../Components/public/Content/Project/projects.component';
import { AboutmeComponent } from '../Components/public/Content/AboutMe/aboutme.component';
import { LoginComponent } from '../Components/public/login/login.component';
import { AllProjectsComponent } from '../Components/public/Content/Project/all/allProjects.component';
import { ProjectProjectComponent } from '../Components/public/Content/Project/projects/project.project.component';
import { privateAllProjectsComponent } from '../Components/private/content/allProjects/privateAllProjectsComponent';
import { privateSettingsComponent } from '../Components/private/content/settings/privateSettingsComponent';
import { privateHomeComponent } from '../Components/private/content/home/privateHomeComponent';
import { privateSettingsHomeComponent } from '../Components/private/content/settings/content/home/privateSettingsHomeComponent';
import { privateSettingsProjectComponent } from '../Components/private/content/settings/content/changeProjectContent/privateSettingsChangeProjectContentComponent';

export const routes: Routes = [    
    { path: '', component: mainComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'projects', component: ProjectsComponent,
          children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: AllProjectsComponent },
            { path: 'project', component: ProjectProjectComponent },
          ] 
        },
        { path: 'aboutme', component: AboutmeComponent },
        { path: 'impressum', component: ImpressumComponent },
      ] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: privateMainComponent, canActivate: [AuthGuard],
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: privateHomeComponent },
        { path: 'allProjects', component: privateAllProjectsComponent },
        { path: 'settings', component: privateSettingsComponent, 
          children: [
            { path: '', component: privateSettingsHomeComponent },
            { path: 'changeProject', component: privateSettingsProjectComponent }
          ]
        }
      ] 
    },	
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);