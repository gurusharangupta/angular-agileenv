import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class WebsocketService {

  socket:any;
  uri:string = "http://localhost:9092"

  constructor() { 
this.socket = io()
}

listen(eventName: string){
  return new Observable((subscriber) => {
    this.socket.on(eventName,(data)=> {
subscriber.next(data);
    })
  });
}

emit(eventName:string, data: any){
  this.socket.emit(eventName,data);
}

}