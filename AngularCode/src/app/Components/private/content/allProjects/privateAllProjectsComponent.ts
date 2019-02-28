import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransfereService } from 'src/app/services/transferService.service';
import { Router } from '@angular/router';

var apiPath = "https://thomasmiller.tk/dotnet/api/";
// var apiPath = "http://localhost:41970/api/";

@Component({
  templateUrl: './privateAllProjectsComponent.html',
  styleUrls: ['../../../../../assets/scss/style.scss']
})

export class privateAllProjectsComponent { 

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
    this.http.get(apiPath + "Projects/getAll", {
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