import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';
/**
 * This is event list resolver class.
 */
@Injectable()
export class EventListResolver implements Resolve<any> {
  /**
   *  Create instances.
   * @param evenntService
   */
  constructor(private evenntService: EventService) {
  }
  /**
   * This is resolve method. get evevts.
   * @returns list of events
   */
  resolve() {
    return this.evenntService.getEvents().pipe(map(events => events));
  }
}
