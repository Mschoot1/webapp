import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TempStreamerService} from '../../../services/temp-streamer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-streaming-chat',
  templateUrl: './streaming-chat.component.html',
  styleUrls: ['./streaming-chat.component.css'],
  providers: [ChatService, TempStreamerService]
})
export class StreamingChatComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  name;
  room;
  streamer;
  username: string;
  followers: number;

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

        this.chatService.leave(this.room);
        this.messages = [];

        this.streamer = this.tempStreamerService.getStreamer(this.name);
        this.room = this.streamer.room;
        console.log(this.room);
        this.chatService.join(this.room);
        console.log('joined room', this.room);

      });
    this.chatService
      .getMessage()
      .subscribe(data => {
        console.log('incoming data', data);
        if (this.room === data.room) {
          console.log('total messages', this.messages);
          this.messages.push(new Message(data.id, data.username, data.message, data.timestamp));
        }
      });
    this.chatService
      .getFollowers()
      .subscribe(data => {
        console.log('incoming followercount', data);
        this.followers = data.followers;
      });
    this.chatService
      .getUsername()
      .subscribe(username => {
        console.log('incoming username', username);
        this.username = username;
      });
  }

  sendMessage() {
    this.messageForm.value.room = this.room;
    this.messageForm.value.username = this.username;
    console.log('msg', this.messageForm.value);
    this.chatService.sendMessage(this.messageForm.value);
    this.messageForm.reset();
  }

  ngOnDestroy() {
    this.chatService.leave(this.room);
  }
}
