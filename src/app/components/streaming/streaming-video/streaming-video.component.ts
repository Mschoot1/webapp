import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BitrateOption, VgAPI} from 'videogular2/core';
import {VgDASH} from 'videogular2/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';
import {Subscription} from 'rxjs/Rx';
import {TimerObservable} from 'rxjs-compat/observable/TimerObservable';
import {DOCUMENT} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {StreamerService} from '../../../services/streamer.service';


declare const hlsPlayer: any;
declare const videojs: any;

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
  streamKey: string;
  source: IMediaStream;

  bitrates: BitrateOption[];
  streams: IMediaStream[] = [
    {
      type: 'hls',
      source: 'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
    },
    {
      type: 'hls',
      source: 'http://206.189.102.241:8000/live/iets/index.m3u8',
    },
    {
      type: 'hls',
      source: 'http://www.streambox.fr/playlists/test_001/stream.m3u8'
    }
  ];
  constructor(private api: VgAPI, private elementref: ElementRef, @Inject(DOCUMENT) private document,
              private route: ActivatedRoute, private router: Router, private streamingService: StreamerService) {
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log('api', api);
    this.api.play();
  }
  ngOnInit() {
    const s = document.createElement('script');
    s.src = 'assets/scripts/script.js';
    this.elementref.nativeElement.appendChild(s);
    this.callHlsjs();
    this.route.params
      .subscribe(params => {
        console.log('params', params);
        console.log('streamkey ' + params['key']);
        this.streamKey = params['key'];
      });
    this.currentStream = this.getSource(this.streamKey);
  }

  callHlsjs() {
    new hlsPlayer();
  }
  getSource(streamKey) {
    if (streamKey === 'key123') {
      this.source = this.streams[0];
    } else {
      this.source = {
        type: 'hls',
        source: 'http://206.189.102.241:8000/live/' + streamKey + '/index.m3u8'
      };
    }
    return this.source;
  }
}
