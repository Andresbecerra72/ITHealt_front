import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() items: Paciente[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
