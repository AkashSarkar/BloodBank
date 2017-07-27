import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonRatingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-rating',
  templateUrl: 'ion-rating.html'
})
export class IonRatingComponent {

  @Input() numStars: number = 5;
  @Input() value: number = 0;
  @Input() leitura: Boolean = false;
  //index:any;


  @Output() ionclick: EventEmitter<number> =new EventEmitter<number>();


  stars: string[] =[];
  

  constructor() {}

  ngAfterViewInit(){

    this.calc();
 
  }

  calc(){

    this.ionclick.emit(this.value);
    
    this.stars =[];
    let tmp = this.value;
    
    for(let i=0; i<this.numStars; i++, tmp--){
        if(tmp>=1)
          this.stars.push("star");
        else if(tmp >0 && tmp<1)
          this.stars.push("star-half");
        else this.stars.push("star-outline");

      }

      
      
  }

  starClicked(index){
    
    if(!this.leitura){
    this.value  = index + 1;
    this.ionclick.emit(this.value);
    this.calc();
    }

    
  }


}
