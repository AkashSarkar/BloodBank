import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchBloodPage } from '../search-blood/search-blood';
import { DataServicesProvider } from '../../providers/data-services/data-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
 
  hospital:any;
  
  constructor(public navCtrl: NavController,private Data:DataServicesProvider) {
     this.Data.hospitals().subscribe(data =>{
      this.hospital=data;
    });
  }

  sBlood() {
    this.navCtrl.push(SearchBloodPage);
  }

  ionViewDidLoad(){
   

}
}
