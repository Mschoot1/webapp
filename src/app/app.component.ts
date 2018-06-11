import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app'; 
  messages = [];
  name = "Naam van account";
  values = '';
  constructor(private socket: Socket, private chatservice: ChatService) { 
  }
    
    ngOnInit() {
      this.chatservice
      .getMessages()
      .subscribe(message => {
        this.messages.push(message);
        console.log("received " + message)
      });
}

sendMsg(message){
   this.chatservice.sendMessage(message);
   console.log("clicked");
}
onKey(event: KeyboardEvent) { // without type info
  this.values += (<HTMLInputElement>event.target).value;
}
}
