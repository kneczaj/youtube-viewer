import { Injectable } from '@angular/core';
import * as hashjs from 'hash.js';
import {HashedCredentials} from '../models/hashed-credentials';
import {isNull, isUndefined} from 'util';
import {database} from './database';
import {Credentials} from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private database: Array<HashedCredentials>;
  private _user: string | null = null;

  get user(): string | null {
    return this._user;
  }

  constructor() {
    this.database = database.users;
  }

  login(credentials: Credentials): boolean {
    const result = this.verify(credentials.login, (hashjs as any).sha256().update(credentials.password).digest('hex'));
    if (result) {
      this._user = credentials.login;
    }
    return result;
  }

  logout(): void {
    this._user = null;
  }

  isAuthenticated(): boolean {
    return !isNull(this.user);
  }

  private verify(login: string, hash: string): boolean {
    const foundCredentials = this.database.find(credentials => credentials.login === login);
    return !isUndefined(foundCredentials) && foundCredentials.hash === hash;
  }
}
