import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BargainFeedPage } from '../bargain-feed/bargain-feed';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthenticationService } from '../../services/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home ');
  }
  
  goToDisplay(){
    this.navCtrl.push(BargainFeedPage);
  }
  onSignIn(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password);
  }


}
