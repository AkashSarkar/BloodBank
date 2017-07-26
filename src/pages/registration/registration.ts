import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {


  rForm: FormGroup;
  submitAttempt: boolean = false;
  data:any;
  item:any;
  result:any;
  donate:boolean;
  d:any;
  dataresponse:any;
  //userinfo={"username":"","realname":"","age":"","gender":"","bloodgroup":"","location":"","phone":"","email":"","password":"","lastdate":""};
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl: ViewController,
     public service:DataServicesProvider,
     public formBuilder: FormBuilder) {
      
     this.result="";

     this.rForm = formBuilder.group({
        username: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+[0-9]*'), Validators.required])],
        realname: ['',Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
        age: ['',Validators.required],
        gender:['',Validators.required],
        bloodgroup:['',Validators.required],
        location: ['',Validators.required],
        phone:['',Validators.compose([Validators.minLength(11),Validators.maxLength(11), Validators.pattern('[0-9]+'), Validators.required])],
        email:['',Validators.compose([Validators.pattern('[a-zA-Z ]+[0-9a-zA-Z. ]*[a-zA-Z ]+[0-9a-zA-Z ]*@[a-zA-Z ]+.[a-zA-Z ]+[.a-zA-Z ]*'), Validators.required])],
        password:['',Validators.compose([Validators.minLength(6), Validators.required])],
        lastdate:['']
    });
  }
   clicked(){
     this.donate=!this.donate;
   }
  register()
  {
    this.submitAttempt = true;
    this.service.postRegister(this.rForm.value).subscribe(result=>{
    this.dataresponse=result;
    //console.log(this.dataresponse);
    if(this.dataresponse){
     this.navCtrl.push(LoginPage);
    }
    else{
     $('#error').html("<span class='text-danger'>Username already taken</span>");
    }
               
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
 
