import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="well">
      <div>Hello World</div>
    </div>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumnailClick(event.name)"  #thumbnail (eventClick)="handleEventClicked($event)"
        [event]= "event"></event-thumbnail>
      </div>
    </div>
     <!--<h3>{{thumbnail.sameProperty}}</h3>-->
     <button class="btn btn-primary" (click)="thumbnail.logFoo()"> Log me some foo</button>
  </div>
  `,
  styles: [`.well div{color:red}`]
})
export class EventListComponent implements OnInit {
  thumbnail
  events: IEvent[];

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    console.log('Received:', data);
  }
  handleThumnailClick(eventName) {
    this.toastr.success(eventName);
  }


}
