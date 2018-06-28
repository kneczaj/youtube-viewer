import { Injectable } from '@angular/core';
import * as hashjs from 'hash.js';
import {HashedCredentials} from '../models/hashed-credentials';
import {isNull, isUndefined} from 'util';
import {database} from './database';
import {Credentials} from '../models/credentials';

/**
 * As this is not a real authentication service, and no tokens are generated to be checked at backend side,
 * to simplify, it just stores user name in a localStorage not to bother you with the login window with every page refresh.
 */
@Injectable()
export class AuthenticationService {

  private database: Array<HashedCredentials>;
  private _user: string | null = null;

  get user(): string | null {
    return this._user;
  }

  constructor() {
    this.database = database.users;
    this._user = localStorage.getItem('user') || null;
  }

  login(credentials: Credentials): boolean {
    const result = this.verify(credentials.login, (hashjs as any).sha256().update(credentials.password).digest('hex'));
    if (result) {
      this._user = credentials.login;
      localStorage.setItem('user', this._user);
    }
    return result;
  }

  logout(): void {
    this._user = null;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    this._user = localStorage.getItem('user') || null;
    return !isNull(this.user);
  }

  private verify(login: string, hash: string): boolean {
    const foundCredentials = this.database.find(credentials => credentials.login === login);
    return !isUndefined(foundCredentials) && foundCredentials.hash === hash;
  }
}
