import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CEUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tempUserSpecific: CEUser = {
    userId: 1,
    firstName: 'Betty',
    lastName: 'Boop',
    email: 'stuff@stuff.com',
    title: 'Ms.',
    nationalStandard: {
      nationalStandardId: 1,
      owningOrganizationId: 2,
      longName: 'United States General Qualification Standard',
      shortName: 'USQS General',
    },
    organizations: [
      {
        organizationId: 1,
        longName: 'Casualty Actuarial Society',
        shortName: 'CAS',
      },
      {
        organizationId: 2,
        longName: 'American Academy of Actuaries',
        shortName: 'AAA',
      },
    ],
    credentials: [
      {
        credentialId: 1,
        organizationId: 1,
        shortName: 'FCAS',
        longName: 'Fellow of the Casualty Actuarial Society',
      },
    ],
  };

  private userSubject: BehaviorSubject<CEUser> = new BehaviorSubject<CEUser>(
    null
  );

  private _userIsAuthenticated = false;

  constructor() {}

  /**
   * Retrieve the current user.
   */
  get user() {
    return this.userSubject.asObservable();
  }

  /**
   * Return user is authenticated boolean.
   */
  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  // TODO: make this async
  public login(email: string, password: string): void {
    this._userIsAuthenticated = true;
    this.userSubject.next(this.tempUserSpecific);
  }

  /**
   * Log out method.
   */
  public logout(): void {
    this._userIsAuthenticated = false;
  }
}
