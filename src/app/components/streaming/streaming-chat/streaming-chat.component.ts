import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TempStreamerService} from '../../../services/temp-streamer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../models/message.model';
import {StreamerService} from '../../../services/streamer.service';
import {Streamer} from '../../models/streamer.model';

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
  streamer: Streamer;
  username: string;
  followers: number;

  constructor(private chatService: ChatService, private route: ActivatedRoute, private router: Router,
  private tempStreamerService: TempStreamerService, private streamerService: StreamerService) {
  }

  messageForm = new FormGroup({
    room: new FormControl(),
    username: new FormControl(),
    message: new FormControl(null, Validators.required)
  });

  ngOnInit() {
    this.streamer = this.streamerService.getCurrentStreamer();
    this.chatService.leave(this.room);
    this.room = this.streamer.stream_key;
    console.log(this.room);
    this.chatService.join(this.room);
    console.log('joined room', this.room);
    this.chatService
      .getMessage()
      .subscribe(data => {
        console.log('incoming data', data);
        if (this.room === data.room) {
          console.log('total messages', this.messages);
          this.messages.unshift(new Message(data.id, data.username, data.message, data.timestamp));
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

  toOverview() {
    this.router.navigate(['overview']);
  }

  ngOnDestroy() {
    this.chatService.leave(this.room);
  }
}
