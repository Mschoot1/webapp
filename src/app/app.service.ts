import {Injectable} from '@angular/core';

import * as io from 'socket.io-client';
import {Observable} from 'rxjs/index';

@Injectable()
export class ChatService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('188.166.127.54:4200', {});
    // this.socket = io.connect('https://localhost:3000');
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('chat_message', (data) => {
        observer.next(data);
      });
    });
  }

  sendMessage(data) {
    if (data.message) {
      this.socket
        .emit('chat_message', data);
    }
  }

  join(room: string) {
    console.log(room);
    this.socket
      .emit('join_room', room);
  }

  leave(room: string) {
    this.socket
      .emit('leave_room', room);
  }
}
