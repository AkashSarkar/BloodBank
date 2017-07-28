import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {DataServicesProvider} from '../../providers/data-services/data-services';
import {TabsPage} from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
})
export class ValidationPage {
 vcode:any;
 userdetails:any;
 responsedata:any;
 res:any;
 userinfo={"username":"","validcode":""};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage:Storage,
              public service:DataServicesProvider) {

 /*storage value
 
  this.storage.get('profile').then((data)=>{
  this.userinfo.username=this.service.username;
  this.userdetails=data;
  //this.res=this.userdetails.name;
  console.log("user1");
  console.log(data);
  });
*/
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationPage');
  }


  validation()
  {
      this.userinfo.username=this.service.username;
      console.log('valid');
      console.log(this.userinfo.username);
      this.userinfo.validcode=this.vcode;
      this.service.postValidaition(this.userinfo).subscribe(data => {
      this.responsedata=data;
      console.log('validation response');
      console.log(this.responsedata);
      if(this.responsedata!="Invalid"){
      this.navCtrl.push(TabsPage,{
        val:this.responsedata
         });
        }
  });

  }

}
