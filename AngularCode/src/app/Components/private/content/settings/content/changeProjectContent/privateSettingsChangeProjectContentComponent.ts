import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

var apiPath = "https://thomasmiller.tk/dotnet/api/";
// var apiPath = "http://localhost:41970/api/";

@Component({
  templateUrl: './privateSettingsChangeProjectContentComponent.html'
})

export class privateSettingsProjectComponent { 
  constructor(private http: HttpClient, private router:Router) {
  }
    
  allProjects: any;
  currentProject: any;
  clearProject: any;

  isPreview = false;

  showUpdate = false;
  showError = false;  

  ngOnInit() { 
    this.clearProject = {'_id': '0', '_name': '', '_githubRepo': '', '_description': '', '_description_big': '', '_thumbnail': '', '_headerImg': '', '_images': '', '_favourite': false, '_private': false}        
    this.currentProject = {'_name': 'name'}   
		this.getProjects();
  }  

  selectorChanged(cProject){        
    this.currentProject = cProject;    
  }

  changeProject(form: NgForm){             
    if(form.value['select_project'] == undefined){
      this.showError = true;
			setTimeout(() => 
			{
				this.showError = false;
			},
      3000);
      return;
    }    
    var values = form.value;      
    var project_payload = {};
    project_payload["_id"] = values["select_project"]["_id"];
    for (let key in values) {      
      var value = String(values[key]);        
      if(key != "select_project"){        
        if(value != ""){
          if(key == "_images"){
            var images:string[][] = [];    
            var img_tmp:string[] = [];        
            var tmp = value.split(",");               
            for(var i=0;i<tmp.length/3;i++){            
              for(var j=0;j<3;j++){
                img_tmp[j] = tmp[i * 3 + j];                             
              }                                    
              images[i] = img_tmp; 
              img_tmp = [];                        
            }                        
            project_payload[key] = images
          }
          else{            
            project_payload[key] = value;
          }          
        }
        else{          
          project_payload[key] = values["select_project"][key];
        }
      }            
    }          
    let credentials = JSON.stringify(project_payload);    
    var token = localStorage.getItem("jwt");  
    var id = project_payload['_id'];
    var _method = "";
    if(id == "0"){
      _method = "add"
    }
    else{
      _method = "change/" + id
    }
    this.http.post(apiPath + "Projects/" + _method, credentials, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response => {		        												
      this.getProjects();
      this.showUpdate = true;
			setTimeout(() => 
			{
				this.showUpdate = false;
			},
      3000);     
    }, err => {
      this.showError = true;
			setTimeout(() => 
			{
				this.showError = false;
			},
      3000);
    });
  }

  deleteProject(_id){     
    if(_id != "0" && _id != undefined){
      var token = localStorage.getItem("jwt");      
      this.http.delete(apiPath + "Projects/delete/" + _id, {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
        })
      }).subscribe(response => {		        												
        this.getProjects();
        this.showUpdate = true;
        setTimeout(() => 
        {
          this.showUpdate = false;
        },
        3000);     
      }, err => {
        this.showError = true;
        setTimeout(() => 
        {
          this.showError = false;
        },
        3000);
      });
    }
    else{
      this.showError = true;
      setTimeout(() => 
      {
        this.showError = false;
      },
      3000);
    }    
  }

  tbChanged(tb){        
    this.currentProject[tb.name] = tb.value;
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

  getMobile(){    
    var width = window.outerWidth
    if(width <= 992){
      return true;
    }
    else {
      return false;
    }
  }

  changePreviewState(){    
    if(this.isPreview){
      this.isPreview = false;
    }
    else{
      this.isPreview = true;
    }
  }
}