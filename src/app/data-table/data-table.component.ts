import {Component, Input, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import {Column} from '../shared/model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  dataList: Data[] = [];
  dataColumnDefs: Column[] = [];
  prop;
  orderBy = 'asc';
  searchTerm;
  @Input() height;
  @Input() searchBy;
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set dataSource(value: any){
    if (value){
      this.dataList = [...value];
      console.log(this.dataList);
    }
  }

  @Input()
  set ColumnDefs(value: any){
    if (value){
      this.dataColumnDefs = [...value];
      console.log(this.dataColumnDefs);
    }
  }

  doSorting = (prop: string) => {
    this.prop = prop;
    this.orderBy = this.orderBy === 'asc' ? 'desc' : 'asc';
  }

  getSortClass = prop => {
    return {
      'fa-sort': prop !== this.prop,
      'fa-caret-up': prop === this.prop && this.orderBy === 'asc',
      'fa-caret-down': prop === this.prop && this.orderBy === 'desc'
    };
  }

}
