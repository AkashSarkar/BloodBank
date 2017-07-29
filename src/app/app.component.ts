import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import { CacheService } from "ionic-cache";
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;
   //r:any;
  constructor(platform: Platform,  cache: CacheService,statusBar: StatusBar, 
  splashScreen: SplashScreen,public storage: Storage ) {
    platform.ready().then(() => {
      cache.setDefaultTTL(60 * 60 * 12);
       //this.r=service.root;
      // Keep our cached results when device is offline!
      cache.setOfflineInvalidate(false);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setRootPage();
    }
    );
  }

  setRootPage() {
   console.log('setting root page...')
   this.storage.get('profile').then((data) => {
  if (data) {
    this.rootPage = LoginPage;
  } else {
    this.rootPage = TabsPage;
  }
});
  }
  }

