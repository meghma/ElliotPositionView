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
  private headers = new Headers({'Access-Control-Allow-Origin': 'http://localhost:4200'});

  private _positionUrl = 'http://localhost:56888/api/positionmonitor/positions'
  private _tradesUrl = 'http://localhost:56888/api/positionmonitor/trades'
  private _securitiesUrl = 'http://localhost:56888/api/positionmonitor/securities'

  // private _positionUrl = 'http://positionserver.azurewebsites.net/api/positionmonitor/positions';
  // private _tradesUrl = 'http://positionserver.azurewebsites.net/api/positionmonitor/trades';
  // private _securitiesUrl = 'http://positionserver.azurewebsites.net/api/positionmonitor/securities';



  constructor(private _http: Http ) { }

  getSecurities(): Observable<Security[]> {
    return this._http.get(this._securitiesUrl)
    .map((response: Response) => <Security[]> JSON.parse(response.json()))
    .catch(this.handleError);
  }

  getTrades(): Observable<Trade[]> {
    return this._http.get(this._tradesUrl)
    .map((response: Response) => <Trade[]> JSON.parse(response.json()))
    .catch(this.handleError);
  }

  getPositions(): Observable<Position[]> {
    return this._http.get(this._positionUrl)
    .map((response: Response) => <Position[]>JSON.parse(response.json()))
    .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
