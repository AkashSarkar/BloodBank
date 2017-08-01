import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {ForumPage} from '../forum/forum';
import {ManageAccountPage} from '../manage-account/manage-account';
import {FeedPage} from '../feed/feed';
import { Storage } from '@ionic/storage';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { CacheService } from 'ionic-cache';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {
  userdetails:any;
  data:any;
 /*previous work 
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public storage:Storage) {
  this.storage.get('profile').then((data)=>{
  this.userdetails=data;
  console.log("user");
  console.log(this.userdetails);
  });*/  
userinfo={"username":"","name":"","location":"","phone":"","lastdate":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider,public app:App,public storage:Storage,private cache: CacheService) {
 // this.userinfo.username=this.service.username;
 // this.userinfo.name=this.service.name1;
  //this.userinfo.phone=this.service.phone;
 // this.userinfo.lastdate=this.service.lastdate;
 // this.userinfo.location=this.service.phone;
  let search=this.service.username;
    console.log("serarch");
    console.log(search);
   // let id=1;
      let str=JSON.stringify({search});
      this.service.___postSearch(str).subscribe(data=>{
        console.log(data);
        this.data=data.json();
        this.userinfo.name=this.data[0].name;
        this.userinfo.phone=this.data[0].phone;
        this.userinfo.lastdate=this.data[0].lastdate;
        this.userinfo.location=this.data[0].location;
    });

  

}
  
  _notification(){
    this.navCtrl.push(NotificationPage);
  }
  _forum()
  {
  
    this.navCtrl.push(ForumPage);

  }
   _hFeedBack(){
    this.navCtrl.push(FeedPage);
  }
   _manage(){
    this.navCtrl.push(ManageAccountPage);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }
   
 logout()
 {
  this.service.splashValue=true;
  this.service.root=false;
  this.cache.clearAll;
  const root=this.app.getRootNav();
  root.popToRoot();
 }

}
