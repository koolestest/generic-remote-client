import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClientProvider {

  private _isConnected: boolean;

  constructor(public http: Http) {
    console.log('Hello ClientProvider Provider');
    this._isConnected = false;
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

}