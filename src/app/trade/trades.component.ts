import { Component, OnInit } from '@angular/core';
import {TradeService} from './trade.service';
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
  constructor(private _tradeService: TradeService) { }


  ngOnInit() {
        this.loading = true;
        this._tradeService.getTrades()
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
