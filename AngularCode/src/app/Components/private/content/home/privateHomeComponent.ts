import { Component } from '@angular/core';

@Component({
  templateUrl: './privateHomeComponent.html'
})
export class privateHomeComponent { 
  logout(){
    localStorage.removeItem("jwt");
  }  
}