import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { TabsPage } from '../tabs/tabs';
import { BargainFeedPage } from '../pages/bargain-feed/bargain-feed';
import { AuthenticationService } from '../services/authentication';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { RssfeedServiceProvider } from '../providers/rssfeed-service/rssfeed-service';
import { FeedsDetailPage } from '../pages/feeds-detail/feeds-detail';
import { GoogleLoginComponent } from '../components/google-login/google-login';

export const firebaseConfig = {
  //fill this data with the data you get from the firebase console
  apiKey: "AIzaSyDkISioa-vMhRwKW91KAYsn0n-M6E4MIMA",
  authDomain: "join-3rdpartyapi.firebaseapp.com"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage,
    RegisterPage,
    FeedsDetailPage,
    SettingsPage,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,                     
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage,
    RegisterPage,
    FeedsDetailPage,
    SettingsPage,
    GoogleLoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService,
    RssfeedServiceProvider,
    InAppBrowser,
    SettingsPage,
    GooglePlus,
  ]
})
export class AppModule {}
