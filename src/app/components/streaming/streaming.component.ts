import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TempStreamerService} from '../../services/temp-streamer.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css'],
  providers: [TempStreamerService]
})
export class StreamingComponent implements OnInit {
  streamer;

  constructor(private route: ActivatedRoute, private router: Router, private tempStreamers: TempStreamerService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log('params', params);
        console.log('name ' + params['name']);
        this.streamer = this.tempStreamers.getStreamer(params['name']);
        console.log('streamer: ', this.streamer);
      });
  }

}
