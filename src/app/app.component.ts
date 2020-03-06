import { Component } from '@angular/core';
import { SpinnerService } from './Services/spinner.service';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project-movie';

  constructor(
    private SpinnerService: SpinnerService,
    public DataService: DataService
  ) { }

  ngOnInit() {
    // this.SpinnerService.start();
    // setTimeout(() => {
    //   this.SpinnerService.stop();
    // }, 2000);
  }
}
