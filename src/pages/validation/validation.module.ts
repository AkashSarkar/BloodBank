import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
  ],
  exports: [
    ValidationPage
  ]
})
export class ValidationPageModule {}
