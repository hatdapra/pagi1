import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ConfigService, PeriodicElement } from 'src/app/services/config.service';
import { BaseService } from '../../services/base.service';
import { Field, Buttons } from '../../services/config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  // dataSource = this.config.ELEMENT_DATA;
  // dataSource  = new MatTableDataSource<PeriodicElement>();
  
  @Input() selectFields!: Field[];
  @Input() displayedColumns2!: Field[];
  @Input() displayedColumns!: string[];
  @Input() btnGrp!: Buttons[];
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() inputName!: string;
  
  dataSubscription: Subscription = new Subscription;
  currentFilterKey: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private config: ConfigService,
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      let d:{[index: string]:any} = data;
      let key: string = this.currentFilterKey || '';
      let source: string = "";
      if(key == ""){
        for (let k in data) {
          source += d[k];
        }
      }else{
        source = d[key];
      }

      return source.toLowerCase().includes(filter.toLowerCase());
    };
  }

}
