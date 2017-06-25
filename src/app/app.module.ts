import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
    SearchBloodPage
  ],
  imports: [
    BrowserModule,
  
    IonicModule.forRoot(MyApp)
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
