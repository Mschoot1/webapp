/**
 * Created by Sander on 15-6-2018.
 */
export class Message {

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  get message(): string {
    return this._message;
  }

  get timestamp(): Date {
    return this._timestamp;
  }

  constructor(private _id: string, private _username: string, private _message: string, private _timestamp: Date) {
    this._id = _id;
    this._username = _username;
    this._message = _message;
    this._timestamp = _timestamp;
  }
}
