import { Component ,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { Content } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   items:any;
   listitem:any=[];
   j:number=5;

    constructor(public navCtrl: NavController,private Data:DataServicesProvider) {
      this.Data.load().subscribe(data =>{
        this.items=data;

        for (let i = 0; i < 5 && i<this.items.length; i++) 
        {
          this.listitem.push( this.items[i] );   
        }
      }); 
    }


    @ViewChild(Content) content: Content;
    // This is for infinite scrooll load
    doInfinite(infiniteScroll) {
      //this.listitem.splice( 0, 3 );
      console.log('Begin async operation');
      setTimeout(() => {
        for (let i = this.j;i<=(this.j+10) && i<this.items.length;i++) 
        {
          this.listitem.push( this.items[i] );
        }
        this.j+=10;
        console.log('Async operation has ended');
        infiniteScroll.complete();
        //this.scrollFunction();
      }, 100);
    }

    
    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
        this.Data.load().subscribe(data =>{
         this.items=data;
         this.j=5;
         this.listitem=[];

        for (let i = 0; i < 5 && i<this.items.length; i++) 
        {
          this.listitem.push( this.items[i] );   
        }
        refresher.complete();
      });
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }

    //Scroll Top Button Function
    scrollFunction() {
      let dimensions = this.content.getContentDimensions();
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || dimensions.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.content.scrollToTop(300);
    }
//Scroll Top Button Function end
    



}
