import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

  secretkey:any="abc123"

  signUpModelForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]+')]],
    secretKey:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    cnfPassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  constructor(private fb:FormBuilder, private rout:Router,private ds:ServiceService){}

  signup(){

    var path=this.signUpModelForm.value
    var name=path.name
    var email=path.email
    var phone=path.phone
    var secretKey=path.secretKey
    var password=path.password
    var cnfPassword=path.cnfPassword
    
    if(this.signUpModelForm.valid){
      if(secretKey==this.secretkey){
        if(password==cnfPassword){
          
          this.rout.navigateByUrl("admin")
        }
        else{
          alert('password doesnt match with confirm password')
        }

      }
      else{
        alert('invalid secret key')
    }
    }
    else{
        alert('not a valid form')
    }


  }
}
