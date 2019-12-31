import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared';

/**
 * This is event resolver class.
 */
@Injectable()
export class EventResolver implements Resolve<any> {
  /**
   * Create instances.
   * @param evenntService
   */
  constructor(private evenntService: EventService) {
  }
  /**
   * This is resolve method.
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot) {
    return this.evenntService.getEvent(route.params.id);
  }
}
