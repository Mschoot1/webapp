import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
@Input() streamer;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log('clicked on ' + this.streamer.name);
  }
}
