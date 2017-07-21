import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { LoginPage } from '../login/login';
import * as $ from 'jquery';
//import {Md5} from 'ts-md5/dist/md5';


/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  data:any;
  item:any;
  result:any;
  blood = [
       {id: 1, name: "A+"},
       {id: 2, name: "A-"},
       {id: 3, name: "B+"},
       {id: 4, name: "B-"},
       {id: 6, name: "O+"},
       {id: 7, name: "O-"},
       {id: 8, name: "AB+"},
       {id: 9, name: "AB-"}
     ];
      location = [
       {id: 1, name: "Dhaka"},
       {id: 2, name: "Chittagong"},
       {id: 3, name: "Sylhet"},
       {id: 4, name: "Rangpur"},
       {id: 5, name: "Barisal"}
     ];
     gender = [
       {id: 1, name: "Male"},
       {id: 2, name: "Female"}
     ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,public service:DataServicesProvider) {
    this.data = {};
    this.data.username = "";
    this.data.age = "";
    this.data.gender="";
    this.data.bloodgroup="";
    this.data.phone="";
    this.data.location="";
    this.data.email="";
    this.data.password = "";
    this.result="";
  }
  
  register()
  {
    let username = this.data.username;
    let age=this.data.age;
    let gender = this.data.gender;
    let bloodgroup = this.data.bloodgroup;
    let phone = this.data.phone;
    let location = this.data.location;
    let email = this.data.email;
    let password = this.data.password;
   // let pass=Md5.hashStr(password);
    //console.log(pass);
    if($.trim(username).length>0 && $.trim(age).length && $.trim(gender).length>0  &&
    $.trim(bloodgroup).length>0&&$.trim(phone).length>0&& $.trim(location).length>0 &&
    $.trim(email).length>0 && $.trim(password).length>0){
    let data = JSON.stringify({username,age,gender,bloodgroup,phone,location,email,password});
    this.service.postRegister(data).subscribe(data => {
    console.log(data);
    this.data=data.json();
    this.result=this.data[0].token;
    console.log(this.result);
    if(this.result!="Invalid"){
    this.navCtrl.push(LoginPage);
    }
   else{
     $('#error').html("<span class='text-danger'>Username already taken</span>");
    }
               
    }, error => {
    $('#error').html("<span class='text-danger'>Invalid username or Password</span>");
        });

    }
    else{
       console.log("error");
       $('#err').html("<span class='text-danger'>Check All The fields</span>");
    }

  }

   dismiss(){
    this.viewCtrl.dismiss();
  }
  login(){
    this.navCtrl.push(LoginPage);
  }


}
