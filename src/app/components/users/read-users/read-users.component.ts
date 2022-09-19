import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from 'src/app/shared/models/List/responseUsers.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css']
})
export class ReadUsersComponent implements OnInit {
  
  responseUsers: ResponseUsers

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(responseUsers => {
      this.responseUsers = responseUsers
    })
  }
}
