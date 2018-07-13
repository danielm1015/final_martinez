import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BargainFeedPage } from './bargain-feed';

@NgModule({
  declarations: [
    BargainFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(BargainFeedPage),
  ],
})
export class BargainFeedPageModule {}
