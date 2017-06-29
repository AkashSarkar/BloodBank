import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-blood',
  templateUrl: 'search-blood.html',
})
export class SearchBloodPage {
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBloodPage');
  }

  initializeItems() {
    this.items = [
      'A+',
      'A-',
      'O+',
      'O-',
      'B+',
      'B-',
      'AB+',
      'AB-'
       ];
  }



   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   }

}
