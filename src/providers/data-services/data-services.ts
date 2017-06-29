import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServicesProvider {

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

    

}
