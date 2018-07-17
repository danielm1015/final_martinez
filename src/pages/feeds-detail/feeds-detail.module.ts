import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsDetailPage } from './feeds-detail';

@NgModule({
  declarations: [
    FeedsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedsDetailPage),
  ],
})
export class FeedsDetailPageModule {}
