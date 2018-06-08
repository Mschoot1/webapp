import {Component} from '@angular/core';
import {ChatService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})

export class AppComponent {
  title = 'app';
  messages = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(message => {
        this.messages.push(message);
      });
  }

  sendMessage(msg) {
    this.chatService.sendMessage(msg);
  }
}
