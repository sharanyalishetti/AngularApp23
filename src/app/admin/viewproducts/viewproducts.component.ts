import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private dsObj : DataService, private router : Router) { }
  mobiles : Mobile[] = [];
  editMobileIndex;
  editMobileObject = new Mobile('','','');
  editMobileStatus : boolean = false;
  ngOnInit(): void {
    this.dsObj.getMobilesData().subscribe(
      res => {
        this.mobiles = res;
      },
      err=> {
        console.log("Error in mobiles data",err);
      }
    )
  }//to edit the mobile
  editMobile(mobileObj,ind) {
    this.editMobileObject = mobileObj;
    this.editMobileIndex = ind;
    this.editMobileStatus = true;
  }
  //to save mobile after edit
  saveMobile(modifiedMobileObj) {
    this.editMobileStatus = false;
    modifiedMobileObj.id = this.editMobileObject["id"];
    modifiedMobileObj.productImage = this.editMobileObject["productImage"];
    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error in updating mobile",err);
      }
    )
  }

  //to delete mobile
  deleteMobile(mObj){
    console.log("Mobile to delete",mObj.id);
    this.dsObj.deleteMobile(mObj.id).subscribe(
      res=> {
        console.log("res is",res);
        alert("Mobile Deleted");
      },
      err=> {
        console.log("Error in deleting mobile",err);
      }
    )

  }


}
