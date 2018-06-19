import {Injectable} from '@angular/core';
import {Streamer} from "../components/models/streamer.model";
/**
 * Created by Sander on 12-6-2018.
 */
@Injectable()
export class TempStreamerService {
  private streamer1 = new Streamer('1', 'Kayvon Rahimi', 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    'Streaming Jimmy Neutron every Friday!', 'key123', true);
  private streamer2 =   new Streamer('1', 'Lars Smans', 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    'Fortnite every day', 'key123', true);
  private streamers: Streamer[];
  public getStreamers() {
    this.streamers = [];
    this.streamers.push(this.streamer1);
    this.streamers.push(this.streamer2);
    return this.streamers;
  }
  public getStreamer(name: string) {
    console.log('length', this.streamers.length);
    for (const streamer of this.streamers) {
      let foundStreamer;
      console.log('checking streamer', streamer);
      if (streamer.name === name) {
        foundStreamer = streamer;
        console.log('found streamer', streamer);
        return foundStreamer;
      }
    }
  }
}

