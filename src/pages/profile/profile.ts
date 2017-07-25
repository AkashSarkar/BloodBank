import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {ForumPage} from '../forum/forum';
import {ManageAccountPage} from '../manage-account/manage-account';
import {FeedPage} from '../feed/feed';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {
  userdetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public storage:Storage) {
  this.storage.get('profile').then((data)=>{
  this.userdetails=data;
  console.log("user");
  console.log(this.userdetails);
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
  //this.navCtrl.push(LoginPage);
  const root=this.app.getRootNav();
  root.popToRoot();
 }

}
