import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/index';
import {UUID} from 'angular2-uuid';

@Injectable()
export class ChatService {
  socket: SocketIOClient.Socket;
  socketHttp: SocketIOClient.Socket;
  socketHttps: SocketIOClient.Socket;
  packets = [];

  constructor() {
    // this.socket = io.connect('188.166.127.54:4200', {});
    this.socketHttp = io.connect('http://localhost:3000', {});
    this.socketHttps = io.connect('https://localhost:3080', {});
  }

  private handlePackets(data, callback) {
    console.log('handlePackets');
    let found = false;
    this.packets.forEach((packet) => {
      if (data.id === packet.id && JSON.stringify(data.data) === JSON.stringify(packet.data) && typeof callback === 'function') {
        callback(data.data);
        this.packets.splice(this.packets.indexOf(packet), 1);
        found = true;
      }
    });
    if (!found) {
      console.log('!found: ' + data.id);
      this.packets.push(data);
    }
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socketHttp.on('chat_message', (data) => {
        this.handlePackets(data, () => {
          console.log('http chat_message callback');
          observer.next(data.data);
        });
      });
      this.socketHttps.on('chat_message', (data) => {
        this.handlePackets(data, () => {
          console.log('https chat_message callback');
          observer.next(data.data);
        });
      });
    });
  }

  getFollowers(): Observable<any> {
    return new Observable(observer => {
      this.socketHttp.on('update_followers', (data) => {
        this.handlePackets(data, () => {
          console.log('http update_followers callback');
          observer.next(data.data);
        });
      });
      this.socketHttps.on('update_followers', (data) => {
        this.handlePackets(data, () => {
          console.log('https update_followers callback');
          observer.next(data.data);
        });
      });
    });
  }

  getUsername(): Observable<any> {
    return new Observable(observer => {
      this.socketHttps.on('connection', (username) => {
        console.log('https connection callback');
        observer.next(username);
      });
    });
  }

  sendMessage(data) {
    console.log('chat_message ', data);
    const id = UUID.UUID();
    if (data.message) {
      this.socketHttp
        .emit('chat_message', {id: id, data: data});
      this.socketHttps
        .emit('chat_message', {id: id, data: data});
    }
  }

  join(room: string) {
    console.log('join_room ' + room);
    const id = UUID.UUID();
    this.socketHttp
      .emit('join_room', {id: id, data: {room: room}});
    this.socketHttps
      .emit('join_room', {id: id, data: {room: room}});
  }

  leave(room: string) {
    console.log('leave_room ' + room);
    const id = UUID.UUID();
    this.socketHttp
      .emit('leave_room', {id: id, data: {room: room}});
    this.socketHttps
      .emit('leave_room', {id: id, data: {room: room}});
  }
}
