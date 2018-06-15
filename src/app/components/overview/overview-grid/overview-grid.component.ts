import { Component, OnInit } from '@angular/core';
import {TempStreamerService} from '../../../services/temp-streamer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StreamerService} from '../../../../../e2e/app/services/streamer.service';

@Component({
  selector: 'app-overview-grid',
  templateUrl: './overview-grid.component.html',
  styleUrls: ['./overview-grid.component.css'],
  providers: [TempStreamerService]
})
export class OverviewGridComponent implements OnInit {
  streamers = [];
  constructor(private tempStreamers: StreamerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.streamers = this.tempStreamers.getStreamers();
  }

  toStreamer(streamer) {
    console.log(streamer);
    this.router.navigate(['view/' + streamer.name], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
