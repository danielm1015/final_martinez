import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication';
import { BargainFeedPage } from '../bargain-feed/bargain-feed';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationService) {
  }
 
  goToBargainFeed(){
    this.navCtrl.push(BargainFeedPage);
  }

  // Register.html Line 17: form data passing through
  // onRegister(form: NgForm) {
  //   this.authService.register(form.value.email, form.value.password)
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));
  // }

}