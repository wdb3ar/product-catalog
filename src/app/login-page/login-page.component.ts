import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  changeLoginCheckbox(event: any): void {
    this.loginService.setLoginState(event.target.checked);
    if (event.target.checked) {
      this.router.navigateByUrl('/catalog');
    }
  }

}
