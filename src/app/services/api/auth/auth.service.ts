import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User} from '../../../models/auth/User';
import { Auth } from '../../../models/auth/Auth';
import { Observable, tap } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token_Data';
  private readonly USER_DATA_KEY = 'USER_Data';
  private readonly SESSION_EXPIRY_KEY = 'sessionExpiryData';
  private readonly SESSION_DURATION = 5 * 24 * 60 * 60 * 1000; // 5 days
  
  private isAuthenticated = false;
  private authToken: string | null = null;

  constructor(
    private jwtService: JwtService,
    private http: HttpClient,
    private router: Router,
  ) { }

  createUser(User: User) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, User);
  }

  loginUser(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(`${environment.apiUrl}/login`, { email, password })
      .pipe(
        tap(user => {
          if (user.token) {
            this.setUserSession(user);
          }
        })
      );
  }

  private setUserSession(authData: Auth): void {
    if (authData.token) {
      const decodedToken = this.jwtService.decodeToken(authData.token);
      const data = {
        name: decodedToken.user,
        token: authData.token,
        userId: decodedToken.sub,
      };

      this.authToken = authData.token;
      this.setStorageItem(this.TOKEN_KEY, authData.token);
      this.setStorageItem(this.USER_DATA_KEY, JSON.stringify(data));
      this.setSessionExpiry();
      this.isAuthenticated = true;

    } else {
      console.error('User token is undefined');
      this.isAuthenticated = false;
    }
  }

  private setStorageItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }

  private removeStorageItem(key: string): void {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }

  private setSessionExpiry(): void {
    const expiryTime = new Date().getTime() + this.SESSION_DURATION;
    sessionStorage.setItem(this.SESSION_EXPIRY_KEY, expiryTime.toString());
  }

  private checkSessionExpiry(): void {
    const expiryTime = sessionStorage.getItem(this.SESSION_EXPIRY_KEY);
    if (expiryTime) {
      const currentTime = new Date().getTime();
      if (currentTime >= +expiryTime) {
        this.logout();
      }
    }
  }

  isLoggedIn(): boolean {
    this.checkSessionExpiry();
    this.authToken = this.getToken();
    return !!this.authToken;
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY) || localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): any | null {
    return sessionStorage.getItem(this.USER_DATA_KEY) || localStorage.getItem(this.USER_DATA_KEY);
  }

  logout(): void {
    this.removeStorageItem(this.TOKEN_KEY);
    this.removeStorageItem(this.USER_DATA_KEY);
    sessionStorage.removeItem(this.SESSION_EXPIRY_KEY);
    this.clearSessionStorage();
    this.isAuthenticated = false;
    this.authToken = null;
    this.router.navigate(['/login']);
  }

  private clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
