import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import {SecurityService} from './security.service';
import { Security } from '../models/security';
import {GridOptions} from 'ag-grid';


@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {

  pageTitle = 'Securities';
  errorMessage: string;
  securities: Security[];
  private gridOptions: GridOptions;

  public loading = false;

  constructor(private _securityService: SecurityService) {
    this.setUpGrid();
  }

  private setUpGrid() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
        {headerName: 'Security ID', field: 'id', width: 10},
        {headerName: 'Security Name', field: 'name', width: 100},
        {headerName: 'Symbol', field: 'symbol', width: 100},
        {headerName: 'Sector', field: 'sector', width: 100},
    ];
  }

  ngOnInit(): void {
            this._securityService
            .getSecurities()
            .subscribe(securities => {
              this.loading = false;
             this.securities = securities;
            },
            error => {
              this.loading = false;
              this.errorMessage = <any>error;
            });
  }

}
