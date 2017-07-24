import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritiesComponent } from './securities.component';
import { PositionsComponent } from './positions.component';
import { TradesComponent } from './trades.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecuritiesComponent, 
    PositionsComponent, 
    TradesComponent],
  providers: [
    
  ]
})
export class PositionModule { }