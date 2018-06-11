import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewItemComponent } from './components/overview/overview-list/overview-item/overview-item.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import {AppRoutingModule} from './app-routing.module';
import { OverviewListComponent } from './components/overview/overview-list/overview-list.component';
import { OverviewStartComponent } from './components/overview/overview-start/overview-start.component';
import {ScrollbarModule} from 'ngx-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverviewItemComponent,
    StreamingComponent,
    OverviewListComponent,
    OverviewStartComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    ScrollbarModule,
    PerfectScrollbarModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
