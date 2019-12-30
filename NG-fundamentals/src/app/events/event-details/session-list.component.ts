import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
/**
 * This is session list component class.
 */
export class SessionListComponent implements OnChanges {
  /**
   * Declare all variables.
   */
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[] = [];

  /**
   * Creates instances.
   * @param auth
   * @param voterService
   */
  constructor(public auth: AuthService, private voterService: VoterService) {
  }
  /**
   * This is ngInChanges method.
   */
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  /**
   * This is toggle vote method.
   * @param session
   */
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  /**
   * This is user has voted method.
   * @param session
   */
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  /**
   * This is filter sessions according to given value
   * @param filter
   * @returns filtered sessions list
   */
  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filter;
      });
    }
  }
}

/**
 * This is sort by name ascending funtions. returns ascending order
 * @param s1
 * @param s2
 */
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}

/**
 * This is sort by votes in descending order.
 * @param s1
 * @param s2
 */
function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
