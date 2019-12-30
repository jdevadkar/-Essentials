import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
/**
 * The Error component class If path is not match then automatically load this component.
 */
export class Error404Component {
  constructor() {
  }
}
