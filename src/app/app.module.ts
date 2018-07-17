import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { TabsPage } from '../tabs/tabs';
import { BargainFeedPage } from '../pages/bargain-feed/bargain-feed';
import { AuthenticationService } from '../services/authentication';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { RssfeedServiceProvider } from '../providers/rssfeed-service/rssfeed-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage,
    RegisterPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingCartPage,
    TabsPage,
    BargainFeedPage,
    RegisterPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService,
    RssfeedServiceProvider
  ]
})
export class AppModule {}
