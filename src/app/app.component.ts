import { Component } from '@angular/core';
import { ApiDateService } from './api-date.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'api';
  apiData: any = [];

  constructor(private apiCall: ApiDateService) {
  this.apiCall.getData().subscribe((responseFromApi) => {
    console.log(responseFromApi);
    this.apiData = responseFromApi;
  });


  setTimeout(() => {
    this.title = 'changed title to basics'
  }, 3000);
  }


  // IF API call to be done on button
  // apiCallOnClick() {
  //   this.apiCall.getData().subscribe((res) => {
  //     console.log(res);
  //     this.apiData = res;
  //   });
  // }
}
