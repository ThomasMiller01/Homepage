import { Component } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransfereService } from 'src/app/services/transferService.service';
import { Router } from '@angular/router';

var apiPath = "https://thomasmiller.tk/dotnet/api/";

@Component({
  templateUrl: './allProjects.component.html',
  styleUrls: ['../../../../../../assets/scss/style.scss']
})

export class AllProjectsComponent { 

  constructor(private http: HttpClient,private transfereService:TransfereService,private router:Router) {
  }
    
  allProjects: any;

  ngOnInit() {		
		this.getProjects();
  }
  
  navigateProject(project){
    this.transfereService.setData(project);
    this.router.navigate(['/projects/project']);
  }

  getProjects(){
    var token = localStorage.getItem("jwt");  
    this.http.get(apiPath + "Projects/getpublic", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response => {													
      this.allProjects = response;      
    }, err => {
      console.log(err);
    });
  }
}