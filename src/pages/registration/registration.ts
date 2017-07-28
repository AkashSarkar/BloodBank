import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {ValidationPage} from '../validation/validation';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  fromData=new FormData();
  rForm: FormGroup;
  submitAttempt: boolean = false;
  data:any;
  item:any;
  result:any;
  donate:boolean;
  d:any;
  dataresponse:any;
  vCode:any;
  value:any;
  res:any;
  userinfo={"username":"","name":"","location":"","phone":"","lastdate":""};
constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl: ViewController,
     public service:DataServicesProvider,
     public formBuilder: FormBuilder,
     public storage:Storage){
     this.result="";
     this.vCode = Math.floor(1000 + Math.random() * 9000);
     
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
    /*previous work;
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
               
    });*/
    

    this.service.postRegister(this.rForm.value).subscribe(data=>{
    this.dataresponse=data;
    this.data=data.json();
    this.service.username=this.data[0].token;
    this.service.lastdate=this.data[0].lastdate;
    this.service.phone=this.data[0].phone;
    this.service.name1=this.data[0].name;
    this.service.location=this.data[0].location;
    console.log("usernameprint");
    console.log(this.service.username);

    //this.responsedata=data;
    this.result=this.data[0].token;
    this.storage.set('profile',data);
    console.log('registerdata');
    console.log(this.dataresponse);
    if(this.result!="Invalid"){
      this.storage.set('profile',data);
      console.log('registerdata2');
      console.log(data);
     //this.navCtrl.push(LoginPage);
       // let vCode = Math.floor(1000 + Math.random() * 9000);
        //this.storage.set('profile',this.userinfo);
        this.fromData.append('email','diponuiu2010@gmail.com');
        this.fromData.append('password','11223344');
        this.fromData.append('device','55220');
        this.fromData.append('number',this.rForm.value.phone);
        this.fromData.append('message','Your verification code is '+this.vCode);
        this.service.smsValidation(this.fromData).subscribe(data => {
        //console.log(data);

        
        });
        this.navCtrl.push(ValidationPage);
        
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

}
 
