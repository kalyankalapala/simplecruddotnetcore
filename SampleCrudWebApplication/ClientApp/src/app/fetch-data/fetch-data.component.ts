import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: any[];
  ngOnInit() {
    this.mahesh()
  }

  constructor(private http: HttpClient) {
  }
  mahesh() {
    // this.http.get<any[]>('https://angmvcapi.azurewebsites.net/api/Employee').subscribe(result => {
      this.http.get<any[]>('https://angmvcapi.azurewebsites.net/api/Employee').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
