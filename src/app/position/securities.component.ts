import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import {PositionService} from './position.service';
import { Security } from '../models/security';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {

  pageTitle : string = 'Securities';
  errorMessage: string;
  securities: Security[];

  constructor(private _positionService : PositionService) { }

  ngOnInit() : void {
            this._positionService
            .getSecurities()
            .subscribe(securities => {
              //console.log(typeof securities)
              //console.log(securities)
              this.securities = securities
            },
                  error => this.errorMessage = <any>error);
  }

}
