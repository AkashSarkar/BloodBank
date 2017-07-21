import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery'
import { TabsPage } from '../tabs/tabs';
import { RegistrationPage } from '../registration/registration';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  splash=true;
  tabBarElement:any;


   data:any;
   item:any;
   result:any;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,private viewCtrl: ViewController,
  public service:DataServicesProvider) {
    
    this.data = {};
    this.data.username = "";
    this.data.password = "";
    this.data.response = '';
    this.result="";
  }
    ionViewDidLoad(){
    setTimeout(()=>{
      this.splash=false;
    },3500);   //3500ms
  }




   login() {
    let username = this.data.username;
    let password = this.data.password;
    if($.trim(username).length>0 && $.trim(password).length>0){
    let data = JSON.stringify({username, password});
    this.service.postLogin(data).subscribe(data => {
    this.data=data.json();
    this.result=this.data[0].token;
    console.log(this.result);
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
   

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  Register()
  {
    this.navCtrl.push(RegistrationPage);
  }

 

}
