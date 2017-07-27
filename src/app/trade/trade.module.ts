import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesComponent } from './trades.component';
import { TradeService } from './trade.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TradesComponent
  ],
    providers: [
      TradeService
  ]
})
export class TradeModule { }
