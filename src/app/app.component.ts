import { Component,ViewChild} from '@angular/core';
import { Platform, Config, Nav, NavController} from 'ionic-angular';
import {Injectable} from "@angular/core";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CacheService } from "ionic-cache";
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { DataServicesProvider } from '../providers/data-services/data-services';
import { App } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;
   @ViewChild('nav') nav;
   //r:any;
  constructor(platform: Platform,  cache: CacheService,statusBar: StatusBar, 
  splashScreen: SplashScreen,public storage: Storage,public service:DataServicesProvider,public app: App) {
    this.setRootPage();
    platform.ready().then(() => {
      cache.setDefaultTTL(60 * 60 * 12);
       //this.r=service.root;
      // Keep our cached results when device is offline!
      cache.setOfflineInvalidate(false);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


       //Registration of push in Android and Windows Phone
     /*   var lastTimeBackPress = 0;
        var timePeriodToExit  = 2000;

        platform.registerBackButtonAction(() => {
            // get current active page
            let view = this.nav.getActive();
            if (view.component.name == "HomePage") {
                //Double check to exit app
                console.log(view.component.name);
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    platform.exitApp; //Exit from app
                } else {
                    let toast = this.toastCtrl.create({
                        message:  'Press back again to exit App?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            } else {
                // go to previous page
                this.nav.pop({});
            }
        });*/
        
         // navigator.app.exitApp() 
    });
  }
  setRootPage() {
   console.log('setting root page...')
   if(!this.service.root) {
    console.log("login");
    this.rootPage=LoginPage;
  } else {
   this.rootPage=HomePage;
  }
  }
  }

