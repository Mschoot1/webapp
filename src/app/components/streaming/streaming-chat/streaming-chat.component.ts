import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TempStreamerService} from '../../../services/temp-streamer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-streaming-chat',
  templateUrl: './streaming-chat.component.html',
  styleUrls: ['./streaming-chat.component.css'],
  providers: [ChatService, TempStreamerService]
})
export class StreamingChatComponent implements OnInit {
  messages = [];
  name;
  room;
  streamer;
  constructor(private chatService: ChatService, private route: ActivatedRoute, private router: Router,
  private tempStreamerService: TempStreamerService) {
  }
  messageForm = new FormGroup({
    room: new FormControl(),
    username: new FormControl(),
    message: new FormControl(null, Validators.required)
  });
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log('params', params);
        console.log('name ' + params['name']);
        this.name = params['name'];
      });
    this.streamer = this.tempStreamerService.getStreamer(this.name);
    this.room = this.streamer.room;
    console.log(this.room);
    this.chatService.join(this.room);
    this.chatService
      .getMessage()
      .subscribe(data => {
        console.log('incoming data', data);
        if (this.room === data.room) {
          console.log('total messages', this.messages);
          this.messages.unshift(data.username + ': ' + data.message);
        }
      });
  }
  sendMessage() {
    this.messageForm.value.room = this.room;
    this.messageForm.value.username = 'user1';
    console.log('msg', this.messageForm.value);
    this.chatService.sendMessage(this.messageForm.value);
    this.messageForm.reset();
  }
}
