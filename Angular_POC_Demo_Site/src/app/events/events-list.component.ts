import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="well">
      <div>Hello World</div>
    </div>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail (eventClick)="handleEventClicked($event)"
        [event]= "event"></app-event-thumbnail>
      </div>
    </div>
     <!--<h3>{{thumbnail.sameProperty}}</h3>-->
     <button class="btn btn-primary" (click)="thumbnail.logFoo()"> Log me some foo</button>
  </div>
  `,
  styles: [`.well div{color:red}`]
})
/**
 * This is Event list component class.
 */
export class EventListComponent implements OnInit {
  events: IEvent[];
  thumbnail: any;

  /**
   * Create instances.
   * @param eventService
   * @param route
   */
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  /**
   * This is ngOnInit method.
   */
  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

  /**
   * This is handle event clicked method.
   */
  handleEventClicked(data) {
    console.log('Received:', data);
  }
}
