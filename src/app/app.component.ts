import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../tabs/tabs';
import { BargainFeedPage } from '../pages/bargain-feed/bargain-feed';
import { AuthenticationService } from '../services/authentication';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private menuCtrl: MenuController, private authService: AuthenticationService)  {
    // Firebase imported and initialized
     // firebase.initializeApp({
        
     // })

      firebase.auth().onAuthStateChanged(user => {
        if(user) { 
          this.isAuthenticated = true;
          this.rootPage = BargainFeedPage;
        } else {
           this.isAuthenticated = false;
           this.rootPage = HomePage;
        }
      })

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

    onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

    onLogOut() {
      this.authService.logout();
      this.menuCtrl.close();
      this.nav.setRoot(HomePage);
      
    }
}