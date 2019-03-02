import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './privateHomeComponent.html'
})
export class privateHomeComponent { 
  constructor(private router:Router) { }

  logout(){
    this.router.navigate(['/home']);
    localStorage.removeItem("jwt");
  }  
}