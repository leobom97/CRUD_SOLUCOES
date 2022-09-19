import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseCreate } from 'src/app/shared/models/Create/responseCreate.model';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
