import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {product} from '../models/product.model';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit{

 
  laptops : product[] = [];

  constructor(private dsObj : DataService){

  }
  ngOnInit() {
    this.laptops = this.dsObj.getLaptopsData();
  }




}
