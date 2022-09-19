import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { API_PATH } from 'src/environments/environment';
import { ResponseUsers } from '../models/List/responseUsers.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestCreate } from '../models/Create/requestCreate.model';
import { ResponseCreate } from '../models/Create/responseCreate.model';
import { ResponseUser } from '../models/Update/responseUser.model';
import { RequestUpdate } from '../models/Update/requestUpdate.model';
import { ResponseUpdate } from '../models/Update/responseUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`${API_PATH}`)
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(`${API_PATH}`, request)
  }

  getUser(id:string): Observable<ResponseUser>{
    const _url = `${API_PATH}/${id}`;
    return this.http.get<ResponseUser>(_url)
  }

  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${API_PATH}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request)
  }

  deleteUser(id: string): Observable<any>{
    const _url = `${API_PATH}/${id}`;
    return this.http.delete<any>(_url)
  }
  
}
