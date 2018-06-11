import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.css']
})
export class OverviewListComponent implements OnInit {
  streamers = [
    {
      name: 'Streamer1',
      short_bio: 'test bio 1',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer2',
      short_bio: 'Test bio 2',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer3',
      short_bio: 'test bio 3',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer4',
      short_bio: 'test bio 4',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer5',
      short_bio: 'test bio 5',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    }, {
      name: 'Streamer6',
      short_bio: 'test bio 6',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer7',
      short_bio: 'Test bio 7',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer8',
      short_bio: 'test bio 8',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer9',
      short_bio: 'test bio 9',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer10',
      short_bio: 'test bio 10',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    }, {
      name: 'Streamer11',
      short_bio: 'test bio 11',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer12',
      short_bio: 'Test bio 12',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png'
    },
    {
      name: 'Streamer13',
      short_bio: 'test bio 13',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer14',
      short_bio: 'test bio 14',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
    {
      name: 'Streamer15',
      short_bio: 'test bio 15',
      avatar_source: 'https://enbaca.com/web/assets/image-resources/avatar.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
