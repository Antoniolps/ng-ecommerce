import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  decodeToken(token: string): any {
    try{
      const [header, payload, signature] = token.split('.');
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    }catch(error){
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
