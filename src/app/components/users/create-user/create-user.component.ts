import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate } from 'src/app/shared/models/Create/requestCreate.model';
import { ResponseCreate } from 'src/app/shared/models/Create/responseCreate.model';
import { User } from 'src/app/shared/models/List/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate ={
    name: '',
    job: ''
  }

 response: ResponseCreate

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(){
    this.userService.createUser(this.request).subscribe(response =>{
      this.response = response
      this.userService.showMessage('Usuário Cadastrado com Sucesso!!!')
    })
  }

}
