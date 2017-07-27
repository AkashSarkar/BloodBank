import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServicesProvider {
  name:string="";

    constructor(private http:Http) {

      
      
    }
    
    load(){
      
      return this.http.get('https://www.uiubloodbank.ml/API/api.php')
      .map(res =>res.json());
    
    }
    search(){
      return this.http.get('https://www.uiubloodbank.ml/API/search.php')
      .map(res =>res.json());
    }
    hospitals(){
      return this.http.get('https://www.uiubloodbank.ml/API/hospital.php')
      .map(res =>res.json());
    }

  postLogin(data){
   let link = "https://uiubloodbank.ml/API/login.php";
   return this.http.post(link,data)
   .map(res =>res.json());
  }
  postRegister(data){
    let link = "https://uiubloodbank.ml/API/Register.php";
      return this.http.post(link,data)
      .map(res =>res.json());   
  }
  
  
postReview(data){
    let link = "https://uiubloodbank.ml/API/setFeedBack.php";
      return this.http.post(link,data);    
  }

getReview(){
    
      return this.http.get('https://www.uiubloodbank.ml/API/getFeedback.php')
      .map(res =>res.json()) 
  }
    
 

    
 
    

}
