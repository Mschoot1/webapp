/**
 * Created by Sander on 15-6-2018.
 */
export class Message {

  constructor(private username: string, private message: string, private timestamp: Date) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
  }
}
