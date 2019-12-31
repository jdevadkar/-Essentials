import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

/**
 * This is event route activator class.
 */
@Injectable()
export class EventRouteActivator implements CanActivate {
  /**
   * Create  instances.
   * @param eventService
   * @param router
   */
  constructor(private eventService: EventService, private router: Router) {
  }

  /**
   * This is canActivate method. checks event is exist or not.
   * @param route
   */
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
