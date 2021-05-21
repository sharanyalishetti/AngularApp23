import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../models/product.model';
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  televisions : product[] = [];

  constructor(private dsObj : DataService){

  }
  ngOnInit() {
    this.televisions = this.dsObj.getTelevisionsData();
  }

 /* productSendByChild = [];

  productCount : number = 0 ;



  getProductDetailsFromChild(productTitle){
    this.productSendByChild.push(productTitle);
    this.productCount++;
    
  }*/


}
