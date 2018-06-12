import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ChatService} from "../app.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: string;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  messages = [];
  joinForm = new FormGroup({
    room: new FormControl()
  });
  messageForm = new FormGroup({
    room: new FormControl(),
    name: new FormControl(),
    msg: new FormControl()
  });

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(data => {
        if (this.room === data.room)
          this.messages.unshift(data.username + ': ' + data.msg);
      });
  }

  join() {
    let room = this.joinForm.value.room;
    this.room = room;
    this.chatService.join(room);
  }

  sendMessage() {
    this.messageForm.value.room = this.room;
    this.messageForm.value.username = 'user1';
    this.chatService.sendMessage(this.messageForm.value);
    this.messageForm.reset();
  }

  leave(room) {
    this.delete.emit(room);
    this.chatService.leave(room);
  }
}
