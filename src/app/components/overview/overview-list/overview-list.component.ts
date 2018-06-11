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
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
