import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchBloodPage } from '../search-blood/search-blood';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  splash=true;
  tabBarElement:any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement=document.querySelector('.tabbar');
}

  sBlood(){
    this.navCtrl.push(SearchBloodPage);
  }

  ionViewDidLoad(){
    this.tabBarElement.style.display='none';

    setTimeout(()=>{
      this.splash=false;
      this.tabBarElement.style.display='flex';
    },3500);
  }

}
