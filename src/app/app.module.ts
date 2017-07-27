import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionService } from './position/position.service';
import { PositionsComponent } from './position/positions.component';

import { TradesComponent } from './trade/trades.component';
import { SecurityModule } from './security/security.module';
import { SecuritiesComponent } from './security/securities.component';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AgGridModule } from 'ag-grid-angular/main';
import { TradeService } from './trade/trade.service';
import { SecurityService } from './security/security.service';

@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    TradesComponent,
    PositionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#21618c',
        secondaryColour: '#21618c',
        tertiaryColour: '#21618c'
    }),
    AgGridModule.withComponents([])
  ],
  providers: [PositionService, SecurityService, TradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
