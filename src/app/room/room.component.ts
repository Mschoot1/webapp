import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChatService} from '../app.service';

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
    message: new FormControl(null, Validators.required)
  });

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(data => {
        if (this.room === data.room) {
          this.messages.unshift(data.username + ': ' + data.message);
        }
      });
  }

  join() {
    const room = this.joinForm.value.room;
    this.room = room;
    this.chatService.join(room);
  }

  sendMessage() {
    this.messageForm.value.room = this.room;
    this.chatService.sendMessage({ 
      message: this.messageForm.message,
      username: 'test_user',     
      room: this.room});
    this.messageForm.reset();
  }

  leave(room) {
    this.delete.emit(room);
    this.chatService.leave(room);
  }
}
