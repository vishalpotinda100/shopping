import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AddComponent } from './layout/add/add.component';
import { UpdateComponent } from './layout/update/update.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { ProductListCardComponent } from './components/product-list-card/product-list-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    SidebarComponent,
    ProductListComponent,
    ProductListCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
