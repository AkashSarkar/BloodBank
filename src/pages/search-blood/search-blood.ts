import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
//import * as $ from 'jquery'
//import { ProfilePage } from '../profile/profile';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-search-blood',
  templateUrl: 'search-blood.html',
})
export class SearchBloodPage {
  data:any;
  result:any;
  result1:any;
  listitem:any=[];
  loader:any;
  val:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider,public loadingCtrl:LoadingController) {
  this.data={};
  this.val=navParams.get('param'); 
   console.log('search here');
    this.presentLoading();
    let search=this.val;
    console.log(search);
   // let id=1;
    let str=JSON.stringify({search});
    this.service.postSearch(str).subscribe(data=>{
        console.log(data);
        this.data=data.json();
        for (let i = 0;i<this.data[0].row; i++) 
        {
           this.listitem.push(this.data[i]); 
        }
    });
    this.loader.dismiss();

  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Searching..."
    });
    this.loader.present();
    }
}
