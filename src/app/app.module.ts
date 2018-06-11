import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';

const config: SocketIoConfig = { url: '188.166.127.54:4200', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
