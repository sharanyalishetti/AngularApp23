import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';
import { product } from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {
  mobiles : Mobile[] = [];
  constructor(private dsObj : DataService) { }

  ngOnInit() {
    this.dsObj.getMobilesData().subscribe(
      mdata => {
        this.mobiles = mdata;
      },
      err => {
        console.log("Error in mobiles data",err);
      }
    )

  }

}
