import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/index';

@Injectable()
export class ChatService {
  socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io.connect('188.166.127.54:4200', {});
  }

  // getMessage() {
  //   return this.socket
  //     .fromEvent<any>('chat_message')
  //     .map(data => data);
  // }
  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('chat_message', (data) => {
        console.log('service data', data);
        observer.next(data);
      });
    });
  }

    sendMessage(data) {
    console.log('data', data);
    if (data.message) {
      this.socket
        .emit('chat_message', data);
    }
  }

  join(room: string) {
    console.log(room);
    this.socket
      .emit('join_room', {room: room});
  }

  leave(room: string) {
    this.socket
      .emit('leave_room___', room);
  }
}
