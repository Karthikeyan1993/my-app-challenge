import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataFilterPipe} from './data-filter.pipe';
import {DataSortPipe} from './data-sort.pipe';
import {DataTableComponent} from './data-table/data-table.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    DataFilterPipe,
    DataSortPipe,
    DataTableComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule {
}
