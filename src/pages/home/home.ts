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
  donate:boolean;
  data:any;
  don:boolean=true;
  splash=true;
  
  constructor(public navCtrl: NavController,private Data:DataServicesProvider) {
    this.data={};
    this.data.lastdate="";
     this.Data.hospitals().subscribe(data =>{
      this.hospital=data;
      this.don=true;
    });
  }
  ionViewDidLoad(){
    setTimeout(()=>{
      this.splash=false;
    },3500);   //3500ms
  }
  clicked(){
     this.donate=!this.donate;
     this.don=!this.don;
   }

  sBlood() {
    let searchvalue=this.data.search;
    this.navCtrl.push(SearchBloodPage,{
      param:searchvalue
    });
   this.donate=!this.donate; 
   this.don=!this.don;
  }
}
