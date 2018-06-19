/**
 * Created by Sander on 18-6-2018.
 */

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Streamer} from '../components/models/streamer.model';
import {Http, Headers} from '@angular/http';
import {Subject} from 'rxjs/Rx';
@Injectable()
export class StreamerService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl; // URL to web api
  private streamers: Streamer[] = [];
  currentStreamer: Streamer;
  streamersChanged = new Subject<Streamer[]>();

  constructor(private http: Http) {
  }
  public getLiveStreamers(): Promise<Streamer[]> {
    console.log('live streamers ophalen van server');
    return this.http.get(this.serverUrl + 'live', {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.streamers = response.json() as Streamer[];
        return this.streamers;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  public setCurrentStreamer(streamer: Streamer) {
    this.currentStreamer = streamer;
    console.log('current streamer', this.currentStreamer);
  }
  public getCurrentStreamer() {
    return this.currentStreamer;
  }
}
