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
  birthday:any;
  bloodgroup:any;
  gender:any;
  pass:any;
  lastdate:any;
  location:any;
  data:any;
  userinfo:any;
  dupdatename:any;
  dupdateemail:any;
  dupdatebirthday:any;
  dupdatebloodgroup:any;
  dupdategender:any;
  dupdatepass:any;
  dupdatelastdate:any;
  dupdatelocation:any;
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
        this.bloodgroup=this.data[0].bloodgroup;
        this.pass=this.data[0].pass;
        this.location=this.data[0].location;
        this.gender=this.data[0].gender;
        this.birthday=this.data[0].birthday;
        this.lastdate=this.data[0].lastdate;
    });
  
  console.log(this.realname);
    this.userinfo={};
    this.userinfo.realname="";
    this.userinfo.email="";
    this.userinfo.bloodgroup="";
    this.userinfo.pass="";
    this.userinfo.location="";
    this.userinfo.gender="";
    this.userinfo.birthday="";
    this.userinfo.lastdate="";


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

    if($.trim(this.userinfo.bloodgroup).length>0){
      this.dupdatebloodgroup=this.userinfo.bloodgroup;
     }
    else{
       this.dupdatebloodgroup=this.bloodgroup;
    }

    if($.trim(this.userinfo.pass).length>0){
      this.dupdatepass=this.userinfo.pass;
     }
    else{
       this.dupdatepass=this.pass;
    }

    if($.trim(this.userinfo.location).length>0){
      this.dupdatelocation=this.userinfo.location;
     }
    else{
       this.dupdatelocation=this.location;
    }

    if($.trim(this.userinfo.gender).length>0){
      this.dupdategender=this.userinfo.gender;
     }
    else{
       this.dupdategender=this.gender;
    }

    if($.trim(this.userinfo.birthday).length>0){
      this.dupdatebirthday=this.userinfo.birthday;
     }
    else{
       this.dupdatebirthday=this.birthday;
    }

    if($.trim(this.userinfo.lastdate).length>0){
      this.dupdatelastdate=this.userinfo.lastdate;
     }
    else{
       this.dupdatelastdate=this.lastdate;
    }
      let realname=this.dupdatename;
      let email=this.dupdateemail;
      let bloodgroup=this.dupdatebloodgroup;
      let pass=this.dupdatepass;
      let location=this.dupdatelocation;
      let gender=this.dupdategender;
      let birthday=this.dupdatebirthday;
      let lastdate=this.dupdatelastdate;
      let username=this.service.username;
      let details=JSON.stringify({username,realname,email,bloodgroup,pass,location,gender,lastdate});
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

          console.log("INV");

        }
      });
   }
}
