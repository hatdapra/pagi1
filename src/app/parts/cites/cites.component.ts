import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Buttons, city, ConfigService, Field } from '../../services/config.service';

@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styleUrls: ['./cites.component.scss']
})
export class CitesComponent implements OnInit {
  dataSource  = new MatTableDataSource<city>();

  selectFields: Field[] = [
    {fieldName: "ID", displayName: "#", inputType: "id"},
    {fieldName: "Name", displayName: "Név", inputType: "text"},
    {fieldName: "CountryCode", displayName: "Ország", inputType: "text"},
    {fieldName: "District", displayName: "Körzet", inputType: "text"},
    {fieldName: "Population", displayName: "Népesség", inputType: "text"}
  ];

  displayedColumns2: Field[] = [
    {fieldName: "ID", displayName: "#"},
    {fieldName: "Name", displayName: "Név"},
    {fieldName: "CountryCode", displayName: "Ország"},
    {fieldName: "District", displayName: "Körzet"},
    {fieldName: "Population", displayName: "Népesség"},
    {fieldName: "actions", displayName: "Actions"}
  ];

  displayedColumns: string[] = this.config.getDisplayedCols(this.displayedColumns2);

  btnGrp: Buttons[] = [
    {class: 'info', matIcon: 'edit'},
    {class: 'danger', matIcon: 'delete'}
  ];

  dataSubscription: Subscription = new Subscription;
  data: city[] = [];

  inputName: string = "city";
  
  constructor(private config: ConfigService, private baseService: BaseService) { }

  ngOnInit(): void {
    this.dataSubscription = this.baseService.getAllCity().subscribe(
      data => this.dataSource.data = (data as unknown as city[])
    ) 
  }

}
