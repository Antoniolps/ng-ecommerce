import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../models/auth/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public avail: boolean = false;
  public msg: string = '';

  private isAuthenticated = false;
  private redirectUrl: string | null = null;
  private authToken: string | null = null;
  private siteKey = '';
  private secretKey = '';

  private readonly TOKEN_KEY = 'token_Data';
  private readonly USER_DATA_KEY = 'USER_Data';
  private readonly SESSION_EXPIRY_KEY = 'sessionExpiryData';
  private readonly SESSION_DURATION = 5 * 24 * 60 * 60 * 1000; // 5 days
  

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  createUser(User: User) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, User);
  }
}
