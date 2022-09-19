import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from 'src/app/shared/models/Update/requestUpdate.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string
  request: RequestUpdate

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(res =>{
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    })
  }
  
  atualizar() {
    this.userService.updateUser(this.id, this.request).subscribe(res =>{
      this.userService.showMessage('Usuário Atualizado com Sucesso!!!')
      this.router.navigate(['/users'])
    })
  }

  cancelar(){
    this.router.navigate(['/users'])
  }

}
