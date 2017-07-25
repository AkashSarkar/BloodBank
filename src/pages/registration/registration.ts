import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { LoginPage } from '../login/login';
import * as $ from 'jquery';
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
      blood_donation = [
       {id: 1, name: "Yes"},
       {id: 2, name: "No"},
       {id: 3, name: "Decide later"}
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
  donate:boolean;
  d:any;
  dataresponse:any;
  userinfo={"username":"","realname":"","age":"","gender":"","bloodgroup":"","location":"","phone":"","email":"","password":"","lastdate":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,public service:DataServicesProvider) {

    this.result="";
  }
   clicked(){
     this.donate=!this.donate;
   }
  register()
  {
   this.service.postRegister(this.userinfo).subscribe(result=>{
    this.dataresponse=result;
    //console.log(this.dataresponse);
    if(this.dataresponse=="Invalid"){
    
       $('#err').html("<span class='text-danger'>Correctly fill up fild</span>");
    }
   else if(this.dataresponse!="null"){
    this.navCtrl.push(LoginPage);
    }
   else{
     $('#error').html("<span class='text-danger'>Username already taken</span>");
    }
               
    }, error => {
    $('#error').html("<span class='text-danger'>Invalid username or Password</span>");
        });
    }
  
   dismiss()
   {
    this.viewCtrl.dismiss();
   }
  login(){
    this.navCtrl.push(LoginPage);
  }


}
