import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssfeedServiceProvider } from '../../providers/rssfeed-service/rssfeed-service';


@IonicPage()
@Component({
  selector: 'page-bargain-feed',
  templateUrl: 'bargain-feed.html',
})
export class BargainFeedPage {

  // Inject RSS Service 
  constructor(private rSSService: RssfeedServiceProvider) {
   this.getRSSFeeds();
  }

  // Subscribe and log response object
  getRSSFeeds() {
    this.rSSService.getRSSFeed()
      .subscribe(data => console.log(data));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BargainFeedPage');
  }

}
