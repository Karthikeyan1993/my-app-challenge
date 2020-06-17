import {Component, OnInit} from '@angular/core';
import {Column, Data} from '../shared/model';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataColumnDefs: Column[] = [];
  dataList$: Observable<Data[]>;
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.init();
  }

  private init = () => {
    this.initColumnDef();
    this.getData();
  }

  private initColumnDef = () => {
    this.dataColumnDefs = [
      {displayName: 'Title', prop: 'title', width: 20},
      {displayName: 'Platform', prop: 'platform', width: 10},
      {displayName: 'Score', prop: 'score', width: 10},
      {displayName: 'Genre', prop: 'genre', width: 10},
      {displayName: 'Editors Choice', prop: 'editors_choice', width: 10},
      {displayName: 'Release Year', prop: 'release_year', width: 10},
    ];
  }

  private getData = () => this.dataList$ = this.service.getData();

}
