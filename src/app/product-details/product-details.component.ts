import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //receive data from parent
  @Input() productObj : product ;

    //Creates a custom event
    @Output() myEvent  = new EventEmitter();
  
  
    sendProductDetails (productTitle) {
      //emit data
      this.myEvent.emit(productTitle);

}
}
