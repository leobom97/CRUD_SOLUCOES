import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/List/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(res =>{
      this.user = res.data
    })
  }

  deletar(){
    this.userService.deleteUser(this.id).subscribe(res => {
      window.confirm("Deseja realmente excluir este usuário?")
      this.userService.showMessage("Usuário excluído com Sucesso!!!")
      this.router.navigate(['/users'])
    })
  }

  cancelar(){
    this.router.navigate(['/users'])
  }

}
