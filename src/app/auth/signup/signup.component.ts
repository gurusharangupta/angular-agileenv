import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../../service/auth.service';
import { AlertService } from '../../service/alert.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private authService: AuthService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const password = form.value.password;
    const confirmPass = form.value.confirm_password;
    const email = form.value.email;
    let signUpObs: Observable<AuthResponseData>;

    if (password === confirmPass) {
     this.authService.signUp(email, password).subscribe(
      resData => {
        this.isLoading = false;
        this.alertService.setSuccessAlert(resData.message);
        this.router.navigate(['/projects']);
        console.log(resData);
      },
      errorMessage => {
        this.alertService.setErrorAlert(errorMessage);
        this.isLoading = false;

      }
    );

    }

  }

}