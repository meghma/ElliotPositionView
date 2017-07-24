import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionsComponent } from './position/positions.component';
import { SecuritiesComponent } from './position/securities.component';
import { TradesComponent } from './position/trades.component';

const routes: Routes = [
    {path: '',pathMatch:'full', redirectTo:'positions'},
    {path: 'positions',component:PositionsComponent},
    {path: 'trades',component:TradesComponent},
    {path: 'securities',component:SecuritiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
