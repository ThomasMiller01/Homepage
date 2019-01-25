import { Component } from '@angular/core';

declare var galleryWebsiteSetup: any;

@Component({
  templateUrl: './website.project.component.html'
})

export class WebsiteProjectComponent { 
  ngOnInit() {    
		var photoswipeSetupFunction = function () { galleryWebsiteSetup(); }
    photoswipeSetupFunction();    
	}
}