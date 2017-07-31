import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import {SecurityService} from './security.service';
import { Security } from '../models/security';
import {GridOptions} from 'ag-grid';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent  {

  pageTitle = 'Securities';
  errorMessage: string;
  securities: Observable<Security[]>;
  private gridOptions: GridOptions;

  public loading = false;

  constructor(private _securityService: SecurityService) {
    this.securities = _securityService.getSecurities();
    this.setUpGrid();
  }

  private createColumnDefs() 
  {
    return [
        {headerName: 'Security ID', field: 'id', width: 100},
        {headerName: 'Security Name', field: 'name', width: 100},
        {headerName: 'Symbol', field: 'symbol', width: 100},
        {headerName: 'Sector', field: 'sector', width: 100},
    ];
  }

  private setUpGrid() {
    this.gridOptions = <GridOptions>{
      enableRangeSelection: true,
      enableColResize: true,
      columnDefs: this.createColumnDefs(),
      deltaRowDataMode: true,
      getRowNodeId: function (Security) {
        return Security.id
      },
      onGridReady: () => {
            this._securityService
            .getSecurities()
            .subscribe(securities => {
              this.loading = false;
             //this.securities = securities;
             this.gridOptions.api.setRowData(securities)
            },
            error => {
              this.loading = false;
              this.errorMessage = <any>error;
            });
      }
    };
    
  }


}
