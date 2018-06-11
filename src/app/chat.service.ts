import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';


@Injectable()
export class ChatService {
    private url = 'https://calm-ravine-53383.herokuapp.com/';  
    private socket;

    getMessages() {
        let observable = new Observable(observer => {
          this.socket = io(this.url);
          this.socket.on('chat message', (data) => {
            observer.next(data);    
          });
          return () => {
            this.socket.disconnect();
          };  
        })     
        return observable;
      } 

    sendMessage(message: string) {
        this.socket
            .emit("chat message", message);
        console.log(message);
    }
}