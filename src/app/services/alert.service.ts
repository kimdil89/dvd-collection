import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(public toastr: ToastrManager) { }

  showSuccess(message) {
    this.toastr.successToastr(message, 'Success!');
  };

  showError() {
    this.toastr.errorToastr('This is error toast.', 'Oops!');
  };

  showWarning() {
    this.toastr.warningToastr('This is warning toast.', 'Alert!');
  };

  showInfo() {
    this.toastr.infoToastr('This is info toast.', 'Info');
  };

  showCustom() {
    this.toastr.customToastr(
      "<span style='color: green; font-size: 16px; text-align: center;>Custom Toast</span>",
      null,
      { enableHTML: true }
    );
  }

  showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position
    });
  }

}