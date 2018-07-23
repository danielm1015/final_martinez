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

  onSignIn(form: NgForm) {

    // create credentials object to pass into authentication servce method
    let crednetials = {
      email: form.value.email,
      password: form.value.password
    }
    this.authService.signin(crednetials);
  }

}
