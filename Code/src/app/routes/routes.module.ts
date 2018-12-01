import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

import { mainComponent } from '../Components/public/main/mainComponent';
import { privateMainComponent } from '../Components/private/main/privateMainComponent';
import { ImpressumComponent } from '../Components/public/Content/Impressum/impressum.component';
import { HomeComponent } from '../Components/public/Content/Home/home.component';
import { ProjectsComponent } from '../Components/public/Content/Project/projects.component';
import { AboutmeComponent } from '../Components/public/Content/AboutMe/aboutme.component';
import { LoginComponent } from '../Components/public/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'public', component: mainComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'projects', component: ProjectsComponent },
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