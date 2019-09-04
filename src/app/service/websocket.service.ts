import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Notification } from '../model/notification.model';
import { AuthService } from '../service/auth.service';
import * as io from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit {
  private url = 'http://localhost:8091';
  private socket;
  ngOnInit() {

  }

  constructor(private authService: AuthService) {
 this.socket = io.connect(this.url);
 
  }

  sendMessage(msg) {
   const email = this.authService.user.getValue().email;
    this.socket.emit('chat', { name: email, message: msg });
    console.log("MESSAGE SENT");
  }

  getNotifications() {
    let observable = new Observable(observer => {
       //   this.socket = io.connect(this.url);
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
     //  this.socket = io.connect(this.url);

      this.socket.on('chat', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return observable;
  }


}
