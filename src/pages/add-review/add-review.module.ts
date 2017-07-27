import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReviewPage } from './add-review';

@NgModule({
  declarations: [
    AddReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReviewPage),
  ],
  exports: [
    AddReviewPage
  ]
})
export class AddReviewPageModule {}
