import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchBloodPage } from '../search-blood/search-blood';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs/Observable';
//import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  //hospital:any;
  donate:boolean;
  data:any;
  don:boolean=true;
  hospital:Observable<any>;
  filmsKey = 'my-films-group';
  constructor(public navCtrl: NavController,private Data:DataServicesProvider,private cache: CacheService) {
    this.data={};
    this.data.lastdate="";
    this.don=true;
    /*this.Data.hospitals().subscribe(data =>{
      this.hospital=data;
      this.don=true;
    });*/
    let url=this.Data.link;
    let req=this.Data.hospitals();
    //console.log(req);
    // this.hospital=req;
     this.hospital = this.cache.loadFromObservable(url,req,this.filmsKey,5);
    
  }
  /*ionViewDidLoad(){
    setTimeout(()=>{
      this.splash=false;
    },3500);   //3500ms
  }*/
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
    forceReload(refresher){
      let url=this.Data.link;
      let req=this.Data.hospitals();
      let delayType = 'all';
      this.hospital = this.cache.loadFromDelayedObservable(url, req, this.filmsKey,5, delayType);
      this.hospital.subscribe(data => {
        refresher.complete();
      });
    }
}
