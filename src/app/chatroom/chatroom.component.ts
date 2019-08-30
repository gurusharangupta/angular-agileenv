import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../service/websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
    
  }
}