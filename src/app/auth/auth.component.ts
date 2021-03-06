import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
   if (!!this.authService.user.getValue()) {
      this.router.navigate(['/projects']);
    }
  }

  onSubmit(form: NgForm) {
 
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe(
      resData => {

        this.router.navigate(['/projects']);
      },
      errorMessage => {
        this.alertService.setErrorAlert(errorMessage);

      }
    );

    form.reset();
  }

 
}