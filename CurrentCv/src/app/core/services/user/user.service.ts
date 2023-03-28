import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { IRequest } from '../../interface/request';
import { IUser } from '../../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string = environment.API_URL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getUser(): Observable<IRequest<IUser>> {
    return this.http.get<IRequest<IUser>>(`${this.apiUrl}/user.json`)
  }
}
