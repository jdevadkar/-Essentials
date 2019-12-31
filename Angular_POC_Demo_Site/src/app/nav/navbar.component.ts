import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav {font-size:15px;}
  #searchForm {margin-right:100px;}
  @media (max-width:1200px) {#searchForm {display:non}}
  li > a.active { color: #F979224;}
  `]
})
/**
 * This is nav bar component class.
 */
export class NavBarComponent implements OnInit {

  searchTerm: string;
  foundSessions: ISession[];
  /**
   *
   * @param authService Create instances.
   * @param eventService
   */
  constructor(public authService: AuthService, private eventService: EventService) {
  }
  /**
   * This is ngOninit method.
   */
  ngOnInit() { }

  /**
   *  This is search session method.
   * @param searchTerm
   */
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
