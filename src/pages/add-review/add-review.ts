import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import * as $ from 'jquery';

/**
 * Generated class for the AddReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {

  data1:any;
  result1:any;
  rate:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,public service:DataServicesProvider) {
    this.data1 = {};
    this.data1.username = this.service.name1;
    //this.data1.username = "";
    this.data1.rating = this.rate;
    this.data1.title = "";
    this.data1.description = "";
    this.result1="";
  }


  review()
  {
     //let username = this.service.name;
     console.log("sadia");
     console.log(this.rate);
     console.log(this.data1.rating);
    // let username = "uiu";
    let username = this.data1.username;
     let rating = this.rate;
     let title = this.data1.title;
     let description = this.data1.description;
     console.log("islam");
     console.log(username);


   if($.trim(rating).length>0 && $.trim(title).length>0  &&
    $.trim(description).length>0){
    let data1 = JSON.stringify({username,rating,title,description});
    this.service.postReview(data1).subscribe(data1 => {
    console.log(data1);
    this.data1=data1.json();
    //this.result1=this.service.name;
    this.result1 = this.data1.username;
    console.log(this.result1);
    if(this.result1!="Invalid"){
    this.navCtrl.push(AboutPage);
      }
    else
        $('#error').html("<span class='text-danger'>Fill up all the fields</span>");

               
    }, error => {
    $('#error').html("<span class='text-danger'>Invalid</span>");
        });

    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }

  log(valor){
    this.rate = valor;
    console.log(valor);
  }


  about(){
    this.navCtrl.push(AboutPage);
  }

}
