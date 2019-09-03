import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Notification } from '../model/notification.model';
import * as io from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit {
  private url = 'http://localhost:8091';
  private socket;

  ngOnInit() {

  }

  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  getNotifications() {
    let observable = new Observable(observer => {
      this.socket = io.connect(this.url);
      this.socket.on('history-notifications', (data) => {
        observer.next(data);
      });
      this.socket.on('live-notifications', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return observable;
  }

  connectToChatroom() {
    let observable = new Observable(observer => {
      this.socket = io.connect(this.url);
      this.socket.on('chatroom', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return observable;
  }
}
