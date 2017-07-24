import { Component, OnInit } from '@angular/core';
import {PositionService} from './position.service';
import { Trade } from '../models/trade';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  pageTitle = 'Trades';
  errorMessage: string;
  trades: Trade[];
  public loading = false;
  constructor(private _positionService: PositionService) { }


  ngOnInit() {
        this.loading = true;
        this._positionService.getTrades()
                .subscribe(trades => {
                                this.loading = false;
                                this.trades = trades;
                              },
                            error => {
                                this.loading = false;
                                this.errorMessage = <any>error;
                              }
                          );
    }

}
