import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!!this.authService.user.getValue()) {

      this.router.navigate(['/projects']);
    }

    this.authService.user.subscribe(
      user => {
        if (!!user) { this.userLoggedIn = true; }
        else { this.userLoggedIn = false }

      });

  }

  logout() {

    this.authService.logout();
    this.router.navigate(['/auth']);
    

  }
}
