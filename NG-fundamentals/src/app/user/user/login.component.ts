import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
  `]
})
/**
 * This is Login component class.
 */
export class LoginComponent {
  userName;
  password;
  mouseoverLogin;

  /**
   * Create instances.
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * This is login method.
   * @param formValues
   */
  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  /**
   * This is cancel method. navigate to events component.
   */
  cancel() {
    this.router.navigate(['events']);
  }
}
