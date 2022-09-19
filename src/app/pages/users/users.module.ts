import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import { MatCardModule } from '@angular/material/card';
import { ReadUsersComponent } from 'src/app/components/users/read-users/read-users.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UserCrudComponent,
    ReadUsersComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    UserCrudComponent,
    ReadUsersComponent
  ]
})
export class UsersModule { }
