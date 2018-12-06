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
import { WebsiteProjectComponent } from '../Components/public/Content/Project/projects/website/website.project.component';
import { Phase7ProjectComponent } from '../Components/public/Content/Project/projects/phase7/phase7.project.component';
import { ZeusEntertainmentProjectComponent } from '../Components/public/Content/Project/projects/zeusentertainment/zeusentertainment.project.component';
import { IntershipsProjectComponent } from '../Components/public/Content/Project/projects/interships/interships.project.component';
import { UnityProjectComponent } from '../Components/public/Content/Project/projects/unity/unity.project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'public', component: mainComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'projects', component: ProjectsComponent,
          children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: AllProjectsComponent },
            { path: 'website', component: WebsiteProjectComponent },   
            { path: 'phase7', component: Phase7ProjectComponent },
            { path: 'zeusentertainment', component: ZeusEntertainmentProjectComponent },
            { path: 'interships', component: IntershipsProjectComponent },       
            { path: 'unity', component: UnityProjectComponent },  
          ] 
        },
        { path: 'aboutme', component: AboutmeComponent },
        { path: 'impressum', component: ImpressumComponent },
      ] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: privateMainComponent, canActivate: [AuthGuard], },	
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);