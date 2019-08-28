import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './service/auth.service';
import { WebsocketService } from './service/websocket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  name = 'Angular';

  constructor(private authService: AuthService, private websocketService: WebsocketService) { }

  ngOnInit() {
 
    this.authService.autoLogin();
  }
}
