import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})



export class AdminHomepageComponent implements OnInit {
  user: any
  items:any=[]
  email: any = ""



  addForm = this.fb.group({
    item: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    quantity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]]



  })



  constructor(private ds: ServiceService, private rout: Router, private fb: FormBuilder) { }

  ngOnInit(): void {



    if (!localStorage.getItem("currentEmail")) {
      alert("please login first")
      this.rout.navigateByUrl("")
    }
    if (localStorage.getItem("currentEmail")) {
      this.user = localStorage.getItem("currentName")
      this.email = localStorage.getItem('currentEmail')

      

    }

    this.ds.displayData(this.email).subscribe((result:any) => {
      this.items = result
      // console.log(result);
      
    },
    result=>{
      alert(result.error)
    })

    // console.log(this.items, this.email); 

  }



  addProduct() {
    var path = this.addForm.value
    var item = path.item
    var price = path.price
    var quantity = path.quantity
    console.log(item);


    if (this.addForm.valid) {
      this.ds.addProduct(item, price, quantity).subscribe((response: any) => {
        alert(response)


        this.ds.displayData(this.email).subscribe((result:any) => {
          this.items = result
          // console.log(result);
          
        },
        result=>{
          alert(result.error)
        })
        
      },
        response => {
          alert(response.error)
        }
      )
    }
    else {
      alert(`invalid form`)
    }

  }
  logout() {
    this.rout.navigateByUrl("admin")
    localStorage.removeItem("currentName")
    localStorage.removeItem("currentEmail")
  }


  edit(id:any,item:any,price:any,quantity:any){

    this.ds.edit(id,item,price,quantity).subscribe((response:any)=>{
      alert(`${response} data edited`)
      // console.log(response); 

      this.ds.displayData(this.email).subscribe((result:any) => {
        this.items = result
        // console.log(result);
        
      },
      result=>{
        alert(result.error)
      })

      
    },
    response=>{
      alert(response.error)
      
    })


  
    

  }

  itemDelete(id:any){
    this.ds.deleteApi(id).subscribe((response)=>{
      console.log(response);
      
      alert(` deleted`)

      this.ds.displayData(this.email).subscribe((result:any) => {
        this.items = result
        // console.log(result);
        
      },
      result=>{
        alert(result.error)
      })

    },
    response=>{
     alert( response.error)
      }
    )
  }

}
