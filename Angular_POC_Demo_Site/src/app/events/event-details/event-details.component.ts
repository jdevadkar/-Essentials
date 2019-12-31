import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding-left:20px; padding-right:20px; }
    .event-image { height:100px; }
    a { cursor:pointer}
  `]
})
/**
 * This is event details component class.
 */
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  /**
   *
   * @param eventService Creates instance.
   * @param route
   */
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }
  /**
   * This is ngOnInit method. declare variables at the time of class loading.
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params.id);
      this.addMode = false;
    });
  }

  /**
   * This is add session method.
   */
  addSession() {
    this.addMode = true;
  }

  /**
   *
   * @param session This is save new session method.
   */
  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  /**
   * This is cancel Add session method.
   */
  cancelAddSession() {
    this.addMode = false;
  }
}
