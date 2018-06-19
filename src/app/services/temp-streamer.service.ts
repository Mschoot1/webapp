import {Injectable} from '@angular/core';
/**
 * Created by Sander on 12-6-2018.
 */
@Injectable()
export class TempStreamerService {
  private streamers = [
    {
      name: 'Streamer1',
      short_bio: 'test bio 1',
      room: 'room 1',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer2',
      short_bio: 'Test bio 2',
      room: 'room 2',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer3',
      short_bio: 'test bio 3',
      room: 'room 3',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer4',
      short_bio: 'test bio 4',
      room: 'room 4',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer5',
      short_bio: 'test bio 5',
      room: 'room 5',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    }, {
      name: 'Streamer6',
      short_bio: 'test bio 6',
      room: 'room 6',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer7',
      short_bio: 'Test bio 7',
      room: 'room 7',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer8',
      short_bio: 'test bio 8',
      room: 'room 8',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer9',
      short_bio: 'test bio 9',
      room: 'room 9',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer10',
      short_bio: 'test bio 10',
      room: 'room 10',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    }, {
      name: 'Streamer11',
      short_bio: 'test bio 11',
      room: 'room 11',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer12',
      short_bio: 'Test bio 12',
      room: 'room 12',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer13',
      short_bio: 'test bio 13',
      room: 'room 13',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer14',
      short_bio: 'test bio 14',
      room: 'room 14',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer15',
      short_bio: 'test bio localhloca15',
      room: 'room 15',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
  ];
  public getStreamers() {
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

