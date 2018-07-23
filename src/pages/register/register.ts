import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication';
import { BargainFeedPage } from '../bargain-feed/bargain-feed';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private authService: AuthenticationService, 
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  // Register.html Line 17: form data passing through
  onRegister(form: NgForm) {

    // create credentials object to pass into authentication servce method
    let crednetials = {
      email: form.value.email,
      password: form.value.password
    }
      const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.register(crednetials)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}