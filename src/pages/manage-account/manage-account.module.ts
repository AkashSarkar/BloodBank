import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageAccountPage } from './manage-account';

@NgModule({
  declarations: [
    ManageAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageAccountPage),
  ],
  exports: [
    ManageAccountPage
  ]
})
export class ManageAccountPageModule {}
