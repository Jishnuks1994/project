import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  secretkey:any="abc123"

  loginForm=this.fb.group({

    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@]+')]],
    secretKey:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],

  
  })

  constructor(private fb:FormBuilder, private rout:Router, private ds:ServiceService){}

  login(){

    var path=this.loginForm.value
    var secretKey=path.secretKey
    var email=path.email
    var password=path.password
    
    if(this.loginForm.valid){
      if(secretKey=this.secretkey){
        this.ds.adminLogin(email,password).subscribe((response:any)=>{
          alert(`${response.name} log in successful`)
          localStorage.setItem("currentName",response.name)
          localStorage.setItem("currentEmail",response.email)
          this.rout.navigateByUrl('adminHomepage')
          // console.log(response);
          
        },
        response=>{
          alert(response.error)
        })

      }
      else{
        alert('invalid secret key')
      }

    }
    else{
      alert("invalid login form")
    }
    
  }
}
