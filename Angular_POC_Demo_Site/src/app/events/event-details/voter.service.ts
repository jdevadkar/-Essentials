import { Injectable } from '@angular/core';
import { ISession } from '../shared';
/**
 * The reusable voter service.
 */
@Injectable()
export class VoterService {

  /**
   * The delete voter method
   * @param session
   * @param voterName
   */
  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  /**
   * The add voter method.
   * @param session
   * @param voterName
   */
  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }
  /**
   * The user has voted method.
   * @param session
   * @param voterName
   * @returns voter list
   */
  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
}
