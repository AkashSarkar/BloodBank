import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items:any;
  constructor(public navCtrl: NavController,private Data:DataServicesProvider) {
    this.Data.load().subscribe(data=>{
      console.log(data);
      this.items=data;
    });
  }
}
