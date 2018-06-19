import { Component, OnInit } from '@angular/core';
import {TempStreamerService} from '../../../services/temp-streamer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {Streamer} from '../../models/streamer.model';
import {StreamerService} from '../../../services/streamer.service';

@Component({
  selector: 'app-overview-grid',
  templateUrl: './overview-grid.component.html',
  styleUrls: ['./overview-grid.component.css'],
  providers: [TempStreamerService]
})
export class OverviewGridComponent implements OnInit {
  livestreamers = [];
  subscription: Subscription;
  defaultStreamers = [];
  streamers = [];

  constructor(private tempStreamers: TempStreamerService, private route: ActivatedRoute, private router: Router,
  private streamerService: StreamerService) { }

  ngOnInit() {
    this.defaultStreamers = this.tempStreamers.getStreamers();
    this.subscription = this.streamerService.streamersChanged
      .subscribe(
        (streamers: Streamer[]) => {
          this.streamers = streamers;
        }
      );
    this.streamerService.getLiveStreamers()
      .then(streamers => {
        this.livestreamers = streamers;
      })
      .catch(error => console.log(error));
    this.streamers = this.livestreamers.concat(this.defaultStreamers);
  }

  toStreamer(streamer) {
    console.log(streamer);
    this.streamerService.setCurrentStreamer(streamer);
    this.router.navigate(['watch/' + streamer.stream_key], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
