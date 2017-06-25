import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {ForumPage} from '../forum/forum';
import {ManageAccountPage} from '../manage-account/manage-account';
import {FeedPage} from '../feed/feed';






@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {
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
   


}
