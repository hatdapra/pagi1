import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Field, Buttons, ConfigService, PeriodicElement } from '../../services/config.service';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>();

  selectFields: Field[] = [
    { fieldName: "position", displayName: "Rsz", inputType: "id" },
    { fieldName: "name", displayName: "Név", inputType: "text" },
    { fieldName: "weight", displayName: "Súly", inputType: "text" },
    { fieldName: "symbol", displayName: "Vegyjel", inputType: "text" },
  ];

  displayedColumns2: Field[] = [
    { fieldName: "position", displayName: "Rsz" },
    { fieldName: "name", displayName: "Név" },
    { fieldName: "weight", displayName: "Súly" },
    { fieldName: "symbol", displayName: "Vegyjel" },
    { fieldName: "actions", displayName: "Actions" },
  ];

  displayedColumns: string[] = this.config.getDisplayedCols(this.displayedColumns2);
  //['position', 'name', 'weight', 'symbol', 'actions'];

  btnGrp: Buttons[] = [
    { class: 'info', matIcon: 'edit' },
    { class: 'danger', matIcon: 'delete' }
  ];

  dataSubscription: Subscription = new Subscription;
  data: PeriodicElement[] = [];

  inputName: string = "periodic";
  newData: PeriodicElement | undefined;

  constructor(private config: ConfigService, private baseService: BaseService) { }

  ngOnInit(): void {

    this.dataSubscription = this.baseService.get().subscribe(
      data => this.dataSource.data = (data as unknown as PeriodicElement[])
    )

    // window.addEventListener('insertData/' + this.inputName, this.buttonClick);
  }
  
}
