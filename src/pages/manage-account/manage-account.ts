import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery'
/**
 * Generated class for the ManageAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage-account',
  templateUrl: 'manage-account.html',
})
export class ManageAccountPage {
  realname:string="";
  email:any;
  data:any;
  userinfo:any;
  dupdatename:any;
  dupdateemail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider,private alertController: AlertController) {
    let search=this.service.username;
    console.log("serarch");
    console.log(search);
   // let id=1;
      let str=JSON.stringify({search});
      this.service._postSearch(str).subscribe(data=>{
        console.log(data);
        this.data=data.json();
        this.realname=this.data[0].name;
        this.email=this.data[0].email;
    });
  
  console.log(this.realname);
    this.userinfo={};
    this.userinfo.realname="";
    this.userinfo.email="";


}
Update(){
  
   if($.trim(this.userinfo.realname).length>0){
      this.dupdatename=this.userinfo.realname;
     }
    else{
      this.dupdatename=this.realname;
    }
    if($.trim(this.userinfo.email).length>0){
      this.dupdateemail=this.userinfo.email;
     }
    else{
       this.dupdateemail=this.email;
    }
      let realname=this.dupdatename;
      let email=this.dupdateemail;
      let username=this.service.username;
      let details=JSON.stringify({username,realname,email});
      console.log(realname);
      console.log(email);
      console.log(username);
      this.service.__postSearch(details).subscribe(data=>{
        console.log(data);
        this.data=data.json();
        //this.service.name1=data[0].
        if(this.data[0].token!="Invalid"){
        let alert = this.alertController.create({
        title: 'Done',
        subTitle: 'You successfully updated your profile',
        //buttons: ['OK']
        buttons:[
           {
                      text: 'OK',
                       handler: data => {
                             //this.isTrue=true;
                             this.navCtrl.push(ProfilePage);
                      }
                    }
        ]
      });
       alert.present();
     // this.navCtrl.push(ProfilePage);
        }
        else{

        }
      });
   }
}
