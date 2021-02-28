import { Component, Input, OnInit } from '@angular/core';
import { Buttons } from '../../services/config.service';

@Component({
  selector: 'app-btn-grp',
  templateUrl: './btn-grp.component.html',
  styleUrls: ['./btn-grp.component.scss']
})
export class BtnGrpComponent implements OnInit {
  /* btnGrp: Buttons[] = [
    {class: 'info', matIcon: 'edit'},
    {class: 'danger', matIcon: 'delete'},
    {class: 'purple', matIcon: 'edit'}
  ]; */

  @Input() btnGrp!: Buttons[];

  test: any[] = [
    {a: 1},
    {a: 2}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
