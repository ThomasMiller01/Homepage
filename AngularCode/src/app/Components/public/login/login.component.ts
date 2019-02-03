import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

var apiPath = "https://thomasmiller.tk/dotnet/api/";

@Component({	
	templateUrl: './login.component.html'
})
export class LoginComponent {
	invalidLogin: boolean;

	constructor(private router: Router, private http: HttpClient) { }	

	login(form: NgForm) {	
		let credentials = JSON.stringify(form.value);
		this.http.post(apiPath + "auth/login", credentials, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		}).subscribe(response => {
			let token = (<any>response).token;
			localStorage.setItem("jwt", token);

			this.invalidLogin = false;
			this.router.navigate(['private']);		
		}, err => {
			this.invalidLogin = true;
			setTimeout(() => 
			{
				this.invalidLogin = false;
			},
			3000);
		});
	}	
}