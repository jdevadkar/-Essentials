import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private evenntService: EventService) {
  }
  resolve(route: ActivatedRouteSnapshot) {
    return this.evenntService.getEvent(route.params['id']);
  }

}
