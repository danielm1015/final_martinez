import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feeds-detail',
  templateUrl: 'feeds-detail.html',
})


export class FeedsDetailPage {

  feeds: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feeds = this.navParams.get('feeds');

  }

}
