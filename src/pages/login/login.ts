import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery'
import { TabsPage } from '../tabs/tabs';
import { RegistrationPage } from '../registration/registration';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   splash=true;
   tabBarElement:any;
   loader:any;
   responsedata:any;
   result:any;
   userdata:any;
   data:any;
   userinfo={"username":"","password":""};
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public service:DataServicesProvider,
              public loadingCtrl:LoadingController,
              public storage:Storage) {
  
}
    ionViewDidLoad(){
    setTimeout(()=>{
      this.splash=false;
    },3500);   //3500ms
  }


   login() {
   /*previous code
    this.presentLoading();
    if($.trim(this.userinfo.username).length>0 && $.trim(this.userinfo.password).length>0){
    this.service.postLogin(this.userinfo).subscribe(data => {
    this.responsedata=data;
    this.result=data[0].token;
   // this.val=result[0].token;
    this.service.name=this.result;
    this.storage.set('profile',data);
    //console.log(this.responsedata);
    //console.log(this.userdata);
    if(this.result!="Invalid"){
      this.navCtrl.push(TabsPage,{
        val:this.result
         });
        }*/
    this.presentLoading();
    if($.trim(this.userinfo.username).length>0 && $.trim(this.userinfo.password).length>0){
    this.service.postLogin(this.userinfo).subscribe(data => {
    this.responsedata=data;
    this.data=data.json();
    this.result=this.data[0].token;
    this.service.username=this.data[0].token;
    this.service.lastdate=this.data[0].lastdate;
    this.service.phone=this.data[0].phone;
    this.service.name1=this.data[0].name;
    this.service.location=this.data[0].location;
    //this.storage.set('profile',data);
    this.result=this.data[0].token;
   // this.val=result[0].token;
    this.service.name=this.result;
    this.storage.set('profile',data);
    //console.log(this.responsedata);
    //console.log(this.userdata);
    if(this.result!="Invalid"){
      this.navCtrl.push(TabsPage,{
        val:this.result
         });
        }
        else{
              $('#error').html("<strong class='text-danger'>Invalid username or Password</strong>");
        }
               
        }, error => {
          $('#error').html("<strong class='text-danger'>Invalid username or Password</strong>");
     });

    }
    else{
       $('#error').html("<strong class='text-danger'>Username or Password can't be empty</strong>");
    }

    this.loader.dismiss();
   
  }

    presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loging in ..."
    });
    this.loader.present();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  Register()
  {
    this.navCtrl.push(RegistrationPage);
  }



}

