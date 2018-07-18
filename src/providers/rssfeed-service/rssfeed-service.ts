import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do' // We can use the do() to perform an action over each element in the obserbale pipline without modifying thr state of the object
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
 

@Injectable()
export class RssfeedServiceProvider {

  private url: string ='https://swapi.co/api/films';

  constructor(private http: HttpClient, private storage: Storage ) {
    console.log('Hello RssfeedServiceProvider Provider');
  }
  
  getRSSFeed() {

    return this.http.get(this.url)
    .do(this.logResponse) //view data
    .map((res => res))
    .catch(this.catchError);
  }


  private catchError(error: Response | any) {
    console.log('Error: ', error)
    return Observable.throw(error.json().error || "Server error");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

}
