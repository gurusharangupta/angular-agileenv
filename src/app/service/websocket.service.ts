import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn:'root'
})
export class WebsocketService {
 private url = 'http://localhost:8091';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  getLiveData1() {
    let observable = new Observable(observer => {
      this.socket = io.connect(this.url);
      this.socket.on('message', (data) => {

        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }
  getLiveData2() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('sampleMessage', (data) => {

        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }
}
