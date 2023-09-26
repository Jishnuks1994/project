import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  signupApi( name:any,email:any,phone:any,password:any){

    const bodyData={
      name,
      email,
      phone,
      password
    }

    return this.http.post('http://localhost:5000/store/customer-register',bodyData)
  }

  loginApi(email:any,password:any){

    const bodyData={
      email,
      password
    }
    return this.http.post('http://localhost:5000/store/customer-login',bodyData)
  }

  adminLogin(email:any,password:any){
    const bodyData={
      email,
      password
    }

    return this.http.post('http://localhost:5000/store/admin-login',bodyData)

  }
  
  addProduct(item:any,price:any,quantity :any){
    const bodyData={
      item,
      price,
      quantity
     
    }
      return this.http.post('http://localhost:5000/store/admin-addProduct',bodyData) 
   

  }

  displayData(email:any){
    return this.http.get('http://localhost:5000/store/admin-display',email)
  }

  edit(id:any,item:any,price:any,quantity:any){  
    const bodyData={
      id,
      item,
      price,
      quantity
    }
    return this.http.put('http://localhost:5000/store/admin-edit',bodyData)

  }

  deleteApi(id:any){
    return this.http.get('http://localhost:5000/store/admin-delete',id)

  }

}

