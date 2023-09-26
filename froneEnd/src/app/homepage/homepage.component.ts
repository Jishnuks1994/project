import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  quantityForm:any =this.fb.group({

    quantity:['',[Validators.pattern('[0-9.>=1]+')]]

  })

  purchaseForm=this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]+')]],
    address:['',[Validators.required,Validators.pattern('[0-9a-zA-Z .]+')]],
  })

  user:any
  email:any
  items:any=[]
  total:any=0
  
  
  constructor(private rout:Router, private ds:ServiceService, private fb:FormBuilder){}

  ngOnInit(): void {
    
    if (!localStorage.getItem("currentEmail")) {
      alert("please login first")
      this.rout.navigateByUrl("")
    }

    if(localStorage.getItem('currentEmail')){
      this.user=localStorage.getItem('currentName')
      this.email = localStorage.getItem('currentEmail')

    }

    this.ds.displayData(this.email).subscribe((result:any) => {
      this.items = result
      // console.log(result);
      
    },
    result=>{
      alert(result.error)
    })
    
    
}




  logout=()=>{
    this.rout.navigateByUrl("")
    localStorage.removeItem("currentName")
    localStorage.removeItem("currentEmail")
  }


  sum=(amt:number,qt:any)=>{
    
    var s=amt*qt

    this.total+=s
    
    


  }

  buy=()=>{
    if(this.purchaseForm.valid){
    window.location.reload()
    alert('Purchase Successful')
  }
  else{
    alert('Please enter phone number and address')
  }
  }
  
}
