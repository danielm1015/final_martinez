import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../tabs/tabs';
import { AuthenticationService } from '../services/authentication';
import firebase from 'firebase';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { BargainFeedPage } from '../pages/bargain-feed/bargain-feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  homePage = HomePage;
  registerPage = RegisterPage;
  settingsPage = SettingsPage;
  isAuthenticated = false;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              private menuCtrl: MenuController, private authService: AuthenticationService,
              public googlePlus: GooglePlus)  {
    // Firebase imported and initialized
      firebase.initializeApp({
        apiKey: "AIzaSyDkISioa-vMhRwKW91KAYsn0n-M6E4MIMA",
        authDomain: "join-3rdpartyapi.firebaseapp.com"
      })

      firebase.auth().onAuthStateChanged(user => {
        if(user) { 
          this.isAuthenticated = true;
          this.rootPage = TabsPage;
        } else {
           this.isAuthenticated = false;
           this.rootPage = this.homePage;
        }
      })

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.googlePlus.trySilentLogin({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': 'webClientId.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
    });

    
  }

    onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

    onLogOut() {
      this.authService.logout();
      this.menuCtrl.close();
      this.nav.setRoot(TabsPage);
      
    }
}