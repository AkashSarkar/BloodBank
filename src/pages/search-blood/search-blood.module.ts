import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBloodPage } from './search-blood';

@NgModule({
  declarations: [
    SearchBloodPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBloodPage),
  ],
  exports: [
    SearchBloodPage
  ]
})
export class SearchBloodPageModule {}
