import {Component, OnInit, ViewChild} from '@angular/core';
import {BitrateOption, VgAPI} from "videogular2/core";
import {VgDASH} from "videogular2/src/streaming/vg-dash/vg-dash";
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

export interface IMediaStream {
  type: 'vod' | 'dash' | 'hls';
  source: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(VgDASH) vgDash: VgDASH;
  @ViewChild(VgHLS) vgHls: VgHLS;
  currentStream: IMediaStream;
  api: VgAPI;

  bitrates: BitrateOption[];
  streams: IMediaStream[] = [
    {
    type: 'dash',
    source: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    },
    {
    type: 'hls',
      source: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    }
  ];
  constructor() {
  }

  ngOnInit() {
    this.currentStream = this.streams[ 1 ];
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log('api', api);
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
