import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewItemComponent } from './components/overview/overview-item/overview-item.component';
import {RouterModule} from '@angular/router';
import { StreamingComponent } from './components/streaming/streaming.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverviewItemComponent,
    StreamingComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
