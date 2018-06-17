import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BitrateOption, VgAPI} from 'videogular2/core';
import {VgDASH} from 'videogular2/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';
import {Subscription} from 'rxjs/Rx';
import {TimerObservable} from 'rxjs-compat/observable/TimerObservable';
import {DOCUMENT} from '@angular/platform-browser';

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

  bitrates: BitrateOption[];
  streams: IMediaStream[] = [
    {
      type: 'hls',
      source: 'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
    },
    {
      type: 'hls',
      source: 'http://188.166.127.54:8000/live/iets/index.m3u8',
    },
    {
      type: 'hls',
      source: 'http://www.streambox.fr/playlists/test_001/stream.m3u8'
    }
  ];
  constructor(private api: VgAPI, private elementref: ElementRef, @Inject(DOCUMENT) private document) {
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log('api', api);
  }
  ngOnInit() {
   this.currentStream = this.streams[ 0 ];
    var s = document.createElement('script');
    s.type = 'application/javascript';
    s.src = '/assets/scripts/script.js';
    this.elementref.nativeElement.appendChild(s);

  }
  // ngAfterViewInit() {
  //   var s = document.createElement('script');
  //   s.type = 'application/javascript';
  //   s.src = 'src/assets/scripts/script.js';
  //   s.text= '    (function(window, videojs) {\n' +
  //     '      var player = window.player = videojs(\'example-video\');\n' +
  //     '\n' +
  //     '      // hook up the video switcher\n' +
  //     '      var loadUrl = document.getElementById(\'load-url\');\n' +
  //     '      var url = document.getElementById(\'url\');\n' +
  //     '      loadUrl.addEventListener(\'submit\', function(event) {\n' +
  //     '        event.preventDefault();\n' +
  //     '        player.src({\n' +
  //     '          src: url.value,\n' +
  //     '          type: \'application/x-mpegURL\'\n' +
  //     '        });\n' +
  //     '        return false;\n' +
  //     '      });\n' +
  //     '    }(window, window.videojs));';
  //   this.elementref.nativeElement.appendChild(s);
  // //  this.callVideojs();
  // }
  // async ngAfterViewInit() {
  //   await this.loadScript()
  // }
  // loadScript() {
  //   return new Promise((resolve, reject) => {
  //     const scriptElement = document.createElement('script');
  //     scriptElement.src = '/assets/scripts/script.js';
  //     scriptElement.onload = resolve;
  //     document.body.appendChild(scriptElement);
  //     }
  //   )
  // }
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
  callVideojs() {
    new videojs();
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
