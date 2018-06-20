/**
 * Created by Sander on 18-6-2018.
 */
export class Streamer {
  private _id: string;
  private _name: string;
  private _avatar_source: string;
  private _short_bio: string;
  private _stream_key: string;
  private _isLive: boolean;


  constructor(id: string, name: string, avatar_source: string, short_bio: string, stream_key: string, isLive: boolean) {
    this._id = id;
    this._name = name;
    this._avatar_source = avatar_source;
    this._short_bio = short_bio;
    this._stream_key = stream_key;
    this._isLive = isLive;
  }

  get isLive(): boolean {
    return this._isLive;
  }

  set isLive(value: boolean) {
    this._isLive = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get avatar_source(): string {
    return this._avatar_source;
  }

  set avatar_source(value: string) {
    this._avatar_source = value;
  }

  get short_bio(): string {
    return this._short_bio;
  }

  set short_bio(value: string) {
    this._short_bio = value;
  }

  get stream_key(): string {
    return this._stream_key;
  }

  set stream_key(value: string) {
    this._stream_key = value;
  }
}
