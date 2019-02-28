import { Component } from '@angular/core';
import { TransfereService } from 'src/app/services/transferService.service';
import { Router } from '@angular/router';

declare var galleryWebsiteSetup: any;

@Component({
  templateUrl: './project.project.component.html'
})
export class ProjectProjectComponent { 
  

  constructor(private transfereService:TransfereService, private router:Router) {
  }

  project: any;

  ngOnInit() {    
		var photoswipeSetupFunction = function () { galleryWebsiteSetup(); }
    photoswipeSetupFunction();    
    var data = this.transfereService.getData();   
    if(data){
      this.project = data;               
    }
    else{
      this.router.navigate(['/projects/all']);
    }
  }

}