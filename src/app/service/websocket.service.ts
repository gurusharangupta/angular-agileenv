import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn:'root'
})
export class WebsocketService {

  socket:any;
  uri:string = "ws://localhost:9092"

  constructor() { 
this.socket = io(this.uri);
}

}