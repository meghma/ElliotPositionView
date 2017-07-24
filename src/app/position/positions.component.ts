import { Component, OnInit } from '@angular/core';
import {PositionService} from './position.service';
import { Position } from '../models/position';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  pageTitle: string = 'Positions';
  errorMessage: string;

  positions: Position[];

  public loading = false;

  constructor(private _positionService : PositionService) { }
  
    ngOnInit() {
        this.loading = true;
        this._positionService.getPositions()
                .subscribe((positions:Position[])  => 
                {
                  //console.log(typeof positions)
                  //console.log(positions)
                  this.loading = false;
                  this.positions = positions;
                },
                (error:any) => 
                {
                  this.loading = false;
                  this.errorMessage = <any>error;
                });
    }

}
