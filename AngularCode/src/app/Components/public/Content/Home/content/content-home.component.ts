import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransfereService } from 'src/app/services/transferService.service';
import { Router } from '@angular/router';

var apiPath = "https://thomasmiller.tk/dotnet/api/";

@Component({
    selector: 'content-home',
    templateUrl: './content-home.component.html'
    // styleUrls: ['Path_to/node_modules/ng-masonry-grid/ng-masonry-grid.css']
})

export class ContentHomeComponent { 
    constructor(private http: HttpClient,private transfereService:TransfereService,private router:Router) { }

  favProjects: any;

  ngOnInit() {		
		this.getFavProjects();
  }

  itemSizes = ["home-favProjects-item1", "home-favProjects-item2", "home-favProjects-item3", "home-favProjects-item2", "home-favProjects-item1"]

  navigateProject(project){
    this.transfereService.setData(project);
    this.router.navigate(['/projects/project']);
  }

  getFavProjects(){
    var token = localStorage.getItem("jwt");  
    this.http.get(apiPath + "Projects/getpublic", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response => {	
        var projects: any;
        projects = response;
        var tmp = [];
        var j = 0;
        for(var i=0;i<projects.length;i++){
            if(projects[i]._favourite){
                tmp[j] = projects[i];
                j++;
            }
        }                    
        this.favProjects = tmp;               
    }, err => {
      console.log(err);
    });
  }
}