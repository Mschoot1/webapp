import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Socket} from 'ng-socket-io';

@Injectable()
export class ChatService {

  constructor(private socket: Socket) {
  }

  getMessage() {
    return this.socket
      .fromEvent<any>("chat_message")
      .map(data => data);
  }

  sendMessage(data) {
    this.socket
      .emit("chat_message", data);
  }

  join(room: string) {
    console.log(room);
    this.socket
      .emit("join_room", room);
  }

  leave(room: string) {
    this.socket
      .emit("leave_room___", room);
  }
}
