import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const password = form.value.password;
    const confirmPass = form.value.confirm_password;
    const email = form.value.email;

    if (password === confirmPass) {
      this.authService.signup(email,password);
    }
  }

}