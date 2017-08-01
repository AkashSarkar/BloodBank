import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

@Injectable()
export class DataServicesProvider {
   name:string="";
   username:string="";
   phone:string="";
   lastdate:string="";
   name1:string="";
   location:string="";
   link:any="https://www.uiubloodbank.ml/API/hospital.php";
   fromData=new FormData();
   splashValue=true;
   root:boolean=false;
   constructor(private http:Http,private toastCtrl: ToastController) {
     
   }
    
    load(){
      
    return this.http.get('https://www.uiubloodbank.ml/API/api.php')
    .map(res =>res.json());
    }
  _postSearch(data){
      let link = "https://uiubloodbank.ml/API/getProfileData.php";
      return this.http.post(link,data);
  }
  postSearch(data){
    let link = "https://uiubloodbank.ml/API/search.php";
    return this.http.post(link,data);
  }
  ___postSearch(data){
    let link ="https://uiubloodbank.ml/API/profile.php";
    return this.http.post(link,data);

  }
  __postSearch(data){
    let link = "https://uiubloodbank.ml/API/postProfileData.php";
      return this.http.post(link,data);
  }
    hospitals(){
    // return this.http.get('https://www.uiubloodbank.ml/API/hospital.php')
     // .map(res =>res.json());
    let url='https://www.uiubloodbank.ml/API/hospital.php'
      return this.http.get(url)
       .map(res => {
        return res.json();
      });
    //return this.http.get('https://www.uiubloodbank.ml/API/hospital.php')
    //.map(res =>res.json());
    }

  postLogin(data){
    console.log("Provider");
    //console.log(this.splashValue);
   console.log(data);
    let link = "https://uiubloodbank.ml/API/login1.php";
      return this.http.post(link,data);
   //.map(res =>res.json());
  }
  postRegister(data){
    this.fromData.append('email','diponuiu2010@gmail.com');
    this.fromData.append('password','11223344');
    this.fromData.append('device','55220');
    let link = "https://uiubloodbank.ml/API/Register.php";
    return this.http.post(link,data);
     // .map(res =>res.json());   
  }
  
  
postReview(data){
    let link = "https://uiubloodbank.ml/API/setFeedBack.php";
    return this.http.post(link,data);    
  }

getReview(){
    
    return this.http.get('https://www.uiubloodbank.ml/API/getFeedback.php')
    .map(res =>res.json()) 
  }
    
 
//validation
 smsValidation(data){
    let link = "http://smsgateway.me/api/v3/messages/send";
    return this.http.post(link,data);
 }
  
  postValidaition(data){
    let link = "https://uiubloodbank.ml/API/validation.php";
    return this.http.post(link,data);
     // .map(res =>res.json());   
  }   
 
    

}
