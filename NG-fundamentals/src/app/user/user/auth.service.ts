import { Injectable } from '@angular/core';
import { IUser } from './user.model';
/**
 * This is Auth service class.
 */
@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa',
    };
  }
  /**
   * This is isAuthenticated method.
   * @returns true or false.
   */
  isAuthenticated() {
    return !!this.currentUser;
  }

  /**
   * This is update currnet user method.
   * @param firstName
   * @param lastName
   */
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
