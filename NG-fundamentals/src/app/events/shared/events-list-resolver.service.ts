import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private evenntService: EventService) {
  }
  resolve() {
    return this.evenntService.getEvents().pipe(map(events => events));
  }

}
