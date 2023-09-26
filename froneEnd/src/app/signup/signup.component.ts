import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  pswMatch:boolean=false

  signUpModelForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]+')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    cnfPassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  constructor(private rout: Router, private fb: FormBuilder,private ds:ServiceService) { }

  signup() {

    var path=this.signUpModelForm.value

    var name=path.name
    var email=path.email
    var phone=path.phone
    var password=path.password
    var cnfPassword=path.cnfPassword

    if(this.signUpModelForm.valid){
      if(password=cnfPassword){
        this.pswMatch=false
        this.ds.signupApi(name,email,phone,password).subscribe((response:any)=>{
          alert(`${response.name} registered successfully`)
          this.rout.navigateByUrl("")
          
        },
        response=>{
          alert(response.error)
          
          
        })
      }
      else{
        this.pswMatch=true
      }

    }
    else{
      alert('invalid form')
    }



  }

}
