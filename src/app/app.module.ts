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
import { StreamingVideoComponent } from './components/streaming/streaming-video/streaming-video.component';
import { StreamingChatComponent } from './components/streaming/streaming-chat/streaming-chat.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    OverviewStartComponent,
    StreamingVideoComponent,
    StreamingChatComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    ScrollbarModule,
    PerfectScrollbarModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
