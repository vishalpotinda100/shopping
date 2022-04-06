import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddComponent } from './layout/add/add.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { RegisterComponent } from './layout/register/register.component';
import { UpdateComponent } from './layout/update/update.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path:'',component:DashboardComponent,pathMatch:'full'},
      {path:'add',component:AddComponent},
      {path:'update',component:UpdateComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'product-list',component:ProductListComponent}

    ]
  }
  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
