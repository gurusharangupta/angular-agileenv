import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {

  public showAlert = new Subject<{ status: string, message: string }>();

  constructor() {

  }

  setSuccessAlert(message: string) {
    let status = 'Success';
    const alert = { status, message };
    this.showAlert.next(alert);

  }

  setErrorAlert(message: string) {
    let status = 'Error';
    const alert = { status, message };
    this.showAlert.next(alert);

  }
}