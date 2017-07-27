import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonRatingComponent } from './ion-rating';

@NgModule({
  declarations: [
    IonRatingComponent,
  ],
  imports: [
    IonicPageModule.forChild(IonRatingComponent),
  ],
  exports: [
    IonRatingComponent
  ]
})
export class IonRatingComponentModule {}
