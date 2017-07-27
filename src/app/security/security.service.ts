import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Security } from '../models/security';



@Injectable()
export class SecurityService {

  //private _securitiesUrl = 'http://localhost:54971/api/positionmonitor/securities';
  private _securitiesUrl = 'http://positionserver.azurewebsites.net/api/positionmonitor/securities';

  constructor(private _http: Http ) { }

  getSecurities(): Observable<Security[]> {
    return this._http.get(this._securitiesUrl)
    .map((response: Response) => <Security[]> JSON.parse(response.json()))
    .catch(this.handleError);
  }


  private handleError(error: any): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
