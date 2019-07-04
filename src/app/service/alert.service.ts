import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {

  public showAlert = new Subject<{ status: string, message: string }>();

  constructor() {

  }

  setAlert(status: string, message: string) {
    const alert = { status, message };
    this.showAlert.next(alert);

  }
}