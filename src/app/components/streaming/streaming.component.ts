import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TempStreamerService} from '../../services/temp-streamer.service';
import {Streamer} from '../models/streamer.model';
import {StreamerService} from '../../services/streamer.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css'],
  providers: [TempStreamerService]
})
export class StreamingComponent implements OnInit {
  streamer: Streamer;

  constructor(private route: ActivatedRoute, private router: Router, private tempStreamers: TempStreamerService,
  private streamerService: StreamerService) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(params => {
    //     console.log('params', params);
    //     console.log('name ' + params['name']);
    //     this.streamer = this.tempStreamers.getStreamer(params['name']);
    //     console.log('streamer: ', this.streamer);
    //   });
    // this.streamer = this.streamerService.getCurrentStreamer();
    console.log('streaming comp streamer', this.streamer);
  }

}
