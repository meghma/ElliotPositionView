import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionsComponent } from './position/positions.component';
import { TradesComponent } from './position/trades.component';
import { SecuritiesComponent } from './position/securities.component';
import { PositionService } from './position/position.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    TradesComponent,
    SecuritiesComponent
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
    })
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
