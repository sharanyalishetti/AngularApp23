import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private dsObj : DataService, private router : Router) { }

  ngOnInit(): void {
  }
  mobileModel = new Mobile('','','');
  onSubmitData(){
    this.dsObj.createNewMobile(this.mobileModel).subscribe(
      res => {
        this.router.navigateByUrl("/admin/viewproducts");
      },
      err => {
        console.log("error in mobiles",err);
      }
    )
  }

}
