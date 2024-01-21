import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { IAccessTokenMessage } from '../interfaces/acces_token_message';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(login: ILogin) {
    return this.http.post<IAccessTokenMessage>(
      `${this.baseUrl}/auth/login`,
      login
    );
  }
}
