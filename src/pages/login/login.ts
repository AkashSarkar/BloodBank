import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery'
import { TabsPage } from '../tabs/tabs';
import { RegistrationPage } from '../registration/registration';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Md5} from 'ts-md5/dist/md5';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
   
   tabBarElement:any;
   loader:any;
   responsedata:any;
   result:any;
   userdata:any;
   data:any;
  // userinfo={"username":"","password":""};
  userinfo:any;
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public service:DataServicesProvider,
              public loadingCtrl:LoadingController,
              public storage:Storage) {
              this.userinfo={};
}
    splash=this.service.splashValue;
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
    
    let username=(this.userinfo.username);
    let password=Md5.hashStr(this.userinfo.password);
    this.service.splashValue=false;
    this.presentLoading();
    if($.trim(username).length>0 && $.trim(password).length>0){ 
    let str=({username});
    this.service.postLogin(str).subscribe(data => {
   // this.responsedata=data;
    this.data=data.json();
    console.log(this.data);
    this.result=this.data[0].token;
   // this.storage.set('profile',this.result);
    this.service.username=this.data[0].token;
    this.service.lastdate=this.data[0].lastdate;
    this.service.phone=this.data[0].phone;
    this.service.name1=this.data[0].name;
    this.service.location=this.data[0].location;
    //this.storage.set('profile',data);
   // this.result=this.data[0].token;
   // this.val=result[0].token;
    this.service.name=this.result;
    //this.storage.set('profile',data);
    //console.log(this.responsedata);
    //console.log(this.userdata);
    console.log("ownpass"+password);
    console.log("serverpass"+this.data[0].password);
    if(this.data[0].password==password){
      this.navCtrl.push(TabsPage,{
        val:this.result
         });
         this.service.root=true; 
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

