import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm=this.fb.group({

  email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],

})

  constructor(private rout:Router,private fb:FormBuilder,private ds:ServiceService){}

  login(){
if(this.loginForm.valid){
  var email=this.loginForm.value.email
  var password=this.loginForm.value.password

  this.ds.loginApi(email,password).subscribe((response:any)=>{

      alert(`${response[0].name} login successful`)
      localStorage.setItem("currentName",response[0].name)
      localStorage.setItem("currentEmail",response[0].email)

      this.rout.navigateByUrl("homepage")
    // console.log(response[0].name);
    

  },
  response=>{
    alert(response.error)
  })

}
else{
  alert("please check your details")
}
}
}
