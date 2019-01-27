import { Component } from '@angular/core';

declare var getYearForCopyright: any;

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent { 
  ngOnInit() {    
		var getYearForCopyrightFunction = function () { getYearForCopyright(); }
    getYearForCopyrightFunction();    
	}
}