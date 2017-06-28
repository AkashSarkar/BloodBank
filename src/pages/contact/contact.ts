import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   items:any;
  constructor(public navCtrl: NavController,private Data:DataServicesProvider) {
     this.Data.load().subscribe(data =>{
      this.items=data;
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
      this.Data.load().subscribe(data =>{
      this.items=data;
      refresher.complete();
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
