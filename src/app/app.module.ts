import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {ProfilePage}from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import {NotificationPage} from '../pages/notification/notification';
import {ManageAccountPage} from '../pages/manage-account/manage-account';
import {ForumPage} from '../pages/forum/forum';
import {FeedPage} from '../pages/feed/feed';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchBloodPage } from '../pages/search-blood/search-blood';
import { HttpModule } from '@angular/http';
import { DataServicesProvider } from '../providers/data-services/data-services';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    NotificationPage,
    ManageAccountPage,
    FeedPage,
    ForumPage,
    LoginPage,
    RegistrationPage,
    SearchBloodPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,
    {
        platforms : {
          android : {
            // These options are available in ionic-angular@2.0.0-beta.2 and up.
            scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
          }
          // http://ionicframework.com/docs/v2/api/config/Config/)
        }
      }
    )
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    NotificationPage,
    ManageAccountPage,
    FeedPage,
    ForumPage,
    LoginPage,
    RegistrationPage,
    SearchBloodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServicesProvider
  ]
})
export class AppModule {}
