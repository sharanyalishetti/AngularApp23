import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../models/product.model';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  
  mobiles : product[] = [];
  constructor(private dsObj : DataService){

  }
  ngOnInit(){
    //this.mobiles = this.dsObj.getMobilesData();
  }

    /*productSendByChild = [];

    productCount : number = 0;

    getProductDetailsFromChild(productTitle){
      this.productSendByChild.push(productTitle);
      this.productCount++;
    }*/


}
