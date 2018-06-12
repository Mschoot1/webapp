import { Component, OnInit } from '@angular/core';
import {TempStreamerService} from '../../../services/temp-streamer.service';

@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.css'],
  providers: [TempStreamerService]
})
export class OverviewListComponent implements OnInit {
  streamers = [];
  constructor(private tempStreamers: TempStreamerService) { }

  ngOnInit() {
    this.streamers = this.tempStreamers.getStreamers();
  }

}
