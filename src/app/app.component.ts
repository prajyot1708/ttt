import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiny-tales';

  constructor(private http: HttpClient) { }
responsedData :any= [];
baseurl: string;
getNumber(number) {
  this.baseurl = "http://localhost:3000/";
  let url = this.baseurl + 'data' + '/'
  this.http.get(url, { params: { number: number } }).subscribe(x => {
    debugger
    this.responsedData = x
  })
}
}
