import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { TabsPage } from '../tabs/tabs';
import { BargainFeedPage } from '../pages/bargain-feed/bargain-feed';
import { AuthenticationService } from '../services/authentication';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService
  ]
})
export class AppModule {}
