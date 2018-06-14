import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BitrateOption, VgAPI} from 'videogular2/core';
import {VgDASH} from 'videogular2/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';
import {Subscription} from 'rxjs/Rx';
import {TimerObservable} from 'rxjs-compat/observable/TimerObservable';


export interface IMediaStream {
  type: 'vod' | 'dash' | 'hls';
  source: string;
}
@Component({
  selector: 'app-streaming-video',
  templateUrl: './streaming-video.component.html',
  styleUrls: ['./streaming-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StreamingVideoComponent implements OnInit {
  @ViewChild(VgDASH) vgDash: VgDASH;
  @ViewChild(VgHLS) vgHls: VgHLS;
  currentStream: IMediaStream;

  bitrates: BitrateOption[];
  streams: IMediaStream[] = [
    {
      type: 'dash',
      source: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    },
    {
      type: 'hls',
      source: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    },
    {
      type: 'hls',
      source: 'http://www.streambox.fr/playlists/test_001/stream.m3u8'
    }
  ];
  constructor(private api: VgAPI) {
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log('api', api);
  }
  ngOnInit() {
   this.currentStream = this.streams[ 1 ];
  }
  onClickStream(stream: IMediaStream) {
    this.api.pause();
    this.bitrates = null;

    const timer: Subscription = TimerObservable.create(0, 10).subscribe(
      () => {
        this.currentStream = stream;
        timer.unsubscribe();
      }
    );
  }

  setBitrate(option: BitrateOption) {
    switch (this.currentStream.type) {
      case 'dash':
        this.vgDash.setBitrate(option);
        break;

      case 'hls':
        this.vgHls.setBitrate(option);
        break;
    }
  }
}
