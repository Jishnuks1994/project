import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminRegister",component:AdminRegisterComponent},
  {path:"adminHomepage",component:AdminHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
