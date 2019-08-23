import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() {
  }

  add(message: string): boolean {
    this.messages.push(message);
    return true;
  }

  clear(): boolean {
    this.messages = [];
    return true;
  }
}
