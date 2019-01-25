import { Component } from '@angular/core';

declare var photoSwipeSetup: any;

@Component({
  templateUrl: './website.project.component.html'
})

export class WebsiteProjectComponent { 
  ngOnInit() {    
		var photoswipeSetupFunction = function () { photoSwipeSetup(); }
    photoswipeSetupFunction();    
	}
}