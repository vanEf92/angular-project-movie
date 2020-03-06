import { Injectable } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

import { DataService } from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
    private spinner: NgxSpinnerService,
    private DataService: DataService
  ) { }

  start() {
    this.DataService.toggleLoadingText();
    this.DataService.toggleLoadingAnimation();
    this.spinner.show(undefined,{
      type: this.DataService.loadingAnimation
    });
  }

  stop() {
    this.spinner.hide();
  }
}
