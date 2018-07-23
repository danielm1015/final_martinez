import { Component } from '@angular/core';

import firebase from 'firebase/app';

import { Observable } from "rxjs/Observable";
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platfrom: Platform) {

    this.user = this.afAuth.authState;

  }  

  googleLogin() {
    
    if(this.platfrom.is('cordova')) {
      const gplusUser =  this.gplus.login({
        'webClientId': 'AIzaSyDLk7KfhjjGxe_9n576oI0FHRZv1zslPPQ',
        'offline': true
      }).then((obj) => {
      if (!firebase.auth().currentUser) {
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
        }
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
    } 
  } 
}
