import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { DeleteUserComponent } from './components/users/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { HomeComponent } from './pages/home/home.component';
import { UserCrudComponent } from './pages/user-crud/user-crud.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserCrudComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'users/update/:id', component: UpdateUserComponent},
  {path: 'users/delete/:id', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
