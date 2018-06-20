import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {TempStreamerService} from '../../services/temp-streamer.service';
import {StreamerService} from '../../services/streamer.service';
import {Streamer} from '../models/streamer.model';
@Component({
  selector: 'app-overview-grid',
  templateUrl: './overview-grid.component.html',
  styleUrls: ['./overview-grid.component.css'],
  providers: [TempStreamerService]
})
export class OverviewGridComponent implements OnInit {
  subscription: Subscription;
  streamers = [];
  noStreamers = false;

  constructor(private tempStreamers: TempStreamerService, private route: ActivatedRoute, private router: Router,
  private streamerService: StreamerService) { }

  ngOnInit() {
    this.subscription = this.streamerService.streamersChanged
      .subscribe(
        (streamers: Streamer[]) => {
          this.streamers = streamers;
        }
      );
    this.streamerService.getLiveStreamers()
      .then(streamers => {
        this.streamers = streamers;
        if (this.streamers.length > 0) {
          this.noStreamers = false;
        }
        console.log('streamer length 1', this.streamers.length);
      })
      .catch(error => console.log(error));
    // this.streamers = this.tempStreamers.getStreamers();
     if (this.streamers.length === 0) {
       this.noStreamers = true;
     }
     console.log('streamer length 2', this.streamers.length);
  }
  toStreamer(streamer) {
    console.log(streamer);
    this.router.navigate(['watch/' + streamer.stream_key], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
