import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
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
 * This is create event component class.
 */
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isDirty = true;
  /**
   *
   * @param router Creates instances.
   * @param eventService
   */
  constructor(private router: Router, private eventService: EventService) {
  }
  /**
   * This is ngOnInit method. define event properties.
   */
  ngOnInit() {
    this.newEvent = {
      id: 2,
      name: 'ng-nl',
      date: new Date('4/15/2037'),
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: 'The NG-NL Convention Center & Scuba Shop',
        city: 'Amsterdam',
        country: 'Netherlands'
      }
    };
  }

  /**
   * This is save event method.
   * @param formValues
   */
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  /**
   * This is cancel method. navigate to event component.
   */
  cancel() {
    this.router.navigate(['/events']);
  }
}
