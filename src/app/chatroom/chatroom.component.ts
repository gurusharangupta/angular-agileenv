import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../service/websocket.service';
import { Notification } from '../model/notification.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  chatMessages: Notification[] = [];
  message: string;
  currentUser: string;

  constructor(private websocketService: WebsocketService, private authService: AuthService) { }

  ngOnInit() {
    this.websocketService.connectToChatroom().subscribe(
      data => {
        console.log(data.message);

        this.chatMessages.push(data.message);
      }
    );
    this.currentUser = this.authService.user.getValue().email;
  }

  sendMessage() {
    this.websocketService.sendMessage(this.message);
  }

}