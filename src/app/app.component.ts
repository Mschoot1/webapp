import {Component, EventEmitter, Output} from '@angular/core';
import {ChatService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})

export class AppComponent {
  @Output() remove: EventEmitter<any> = new EventEmitter();

  title = 'app';
  list = [
    'room 1',
    'room 2',
    'room 3',
    'room 4',
    'room 5',
    'room 6',
    'room 7',
    'room 8',
    'room 9'];
  rooms = [];

  constructor(private chatService: ChatService) {
  }

  removeRoom(event) {
    for (let i = this.rooms.length - 1; i >= 0; i--) {
      if (this.rooms[i] === event) {
        this.rooms.splice(i, 1);
      }
    }
  }

  addToScreen(room: string) {
    if (this.rooms.length < 4 && !this.rooms.includes(room)) {
      this.rooms.push(room);
      this.chatService.join(room);
    }
  }
}
