import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Position } from '../models/position';
import { Security } from '../models/security';
import { Trade } from '../models/trade';


@Injectable()
export class PositionService {
  //private _positionUrl = 'http://localhost:54971/api/positionmonitor/positions';
  private _positionUrl = 'http://positionserver.azurewebsites.net/api/positionmonitor/positions';

  constructor(private _http: Http ) { }

  getPositions(): Observable<Position[]> {
    return this._http.get(this._positionUrl)
    .map((response: Response) => <Position[]> JSON.parse(response.json()))
    .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
