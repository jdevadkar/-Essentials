import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
    `
})
/**
 * This is a Events app component. Starting point of Application.
 */
export class EventsAppComponent {
  // The title.
  title = 'app';
}
