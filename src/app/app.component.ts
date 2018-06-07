import { Component } from '@angular/core';
import {BitrateOption} from "videogular2/core";
import {VgDASH} from "videogular2/src/streaming/vg-dash/vg-dash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(VgDASH) vgDash: VgDASH;
  stream = {
    // source: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    source: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  };
  // bitrates: BitrateOption[];
  //
  // setBitrate(option: BitrateOption) {
  //   this.vgDash.setBitrate(option);
  //   }
}
