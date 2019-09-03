import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    

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
