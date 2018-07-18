import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RssfeedServiceProvider } from '../../providers/rssfeed-service/rssfeed-service';
import { Observable } from 'rxjs/Observable';
import { FeedsDetailPage } from '../feeds-detail/feeds-detail';


@IonicPage()
@Component({
  selector: 'page-bargain-feed',
  templateUrl: 'bargain-feed.html',
})
export class BargainFeedPage {

  feeds: Observable<any>; // Observable

  // Inject RSS Service 
  constructor(private rSSService: RssfeedServiceProvider, public navCtrl: NavController) {
    this.getRSSFeeds();
  }

  // Subscribe and log response object
  getRSSFeeds() {
    this.feeds = this.rSSService.getRSSFeed();
    this.feeds.subscribe(data => console.log(data));
  }

  openDetails(feeds) {
    this.navCtrl.push(FeedsDetailPage, {feeds: feeds});
  }


}
