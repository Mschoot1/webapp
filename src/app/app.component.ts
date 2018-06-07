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
    type: 'dash',
    source: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
  };
  // bitrates: BitrateOption[];
  //
  // setBitrate(option: BitrateOption) {
  //   this.vgDash.setBitrate(option);
  //   }
}
