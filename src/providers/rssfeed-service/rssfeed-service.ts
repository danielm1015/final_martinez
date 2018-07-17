import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do' // We can use the do() to perform an action over each element in the obserbale pipline without modifying thr state of the object

@Injectable()
export class RssfeedServiceProvider {

  private url: string ='https://www.reddit.com/.json';

  constructor(private http: HttpClient) {
    console.log('Hello RssfeedServiceProvider Provider');
  }

  getRSSFeed() {

    return this.http.get(this.url)
    .do(res => console.log(res)); //view data
  }
}
