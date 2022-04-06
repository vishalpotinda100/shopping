import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { AddComponent } from './modules/admin/layout/add/add.component';
import { DashboardComponent } from './modules/admin/layout/dashboard/dashboard.component';
import { LoginComponent } from './modules/admin/layout/login/login.component';
import { UpdateComponent } from './modules/admin/layout/update/update.component';
import { RegisterComponent } from './modules/user/layout/register/register.component';
const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path:'',
      component:DashboardComponent,pathMatch:'full'},
      {path:'add',component:AddComponent},
      {path:'update',component:UpdateComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
