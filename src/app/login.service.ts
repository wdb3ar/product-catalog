import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setLoginState(state: boolean): void {
    localStorage.setItem('loginState', state.toString());
  }

  isLogged(): boolean {
    return localStorage.getItem('loginState') === 'true';
  }
}
