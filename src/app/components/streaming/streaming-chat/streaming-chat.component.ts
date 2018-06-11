import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming-chat',
  templateUrl: './streaming-chat.component.html',
  styleUrls: ['./streaming-chat.component.css']
})
export class StreamingChatComponent implements OnInit {
  messages = [];
  // messages =[{
  //   "text": "Hi how are you?",
  //   "self":false
  // }, {
  //   "text": "I am fine",
  //   "self": true
  // }];
  replyMessage = "";
  constructor() {
  }

  ngOnInit() {
  }

  reply() {
    this.messages.push({
      "text": this.replyMessage,
      "self":true
    })
    this.replyMessage = "";
  }
}
