import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alertType: string = 'alert ';
  alertSubscription: Subscription;
   statusMessage: string = '';
  status: string = '';
  constructor(private alertService: AlertService) { }

  ngOnInit() {

      this.alertSubscription = this.alertService.showAlert.subscribe(
      (alert) => {

        this.statusMessage = alert.message;
        this.status = alert.status;
        if (this.status == 'Success') this.alertType += 'alert-success alert-dismissible fade in';
        if (this.status == 'Error') this.alertType += 'alert-danger alert-dismissible fade in';

      }
    );
  }


    ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
  hideAlert() {
    this.status = '';
    this.alertType = 'alert ';
  }

}