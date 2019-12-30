import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color:#999;}
    .error :ms-input-placeholder {color:#999 }
  `]
})
/**
 * This is profile component class
 */
export class ProfileComponent implements OnInit {
  /**
   * Define form controls and Group.
   */
  private firstName: FormControl;
  private lastName: FormControl;
  profileForm: FormGroup;
  /**
   * Creates an instance.
   * @param auth
   * @param router
   * @param toastr
   */
  constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }
  /**
   * This is ngOnInit method. Initalize values.
   */
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  /**
   * This is cave profile method.
   * @param formValues
   */
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
    }
  }

  /**
   * This is validate first name method.
   * @returns true or false
   */
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  /**
   * This is validate last name method.
   * @returns true or false.
   */
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  /**
   * This is cancel method. navigate to events component.
   */
  cancel() {
    this.router.navigate(['events']);
  }
}
