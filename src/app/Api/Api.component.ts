import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { data1info } from '../models/data1info.model';
import { FakeDataService } from '../fake-data.service';
import { data1 } from '../models/data1.model';
@Component({
  selector: 'app-test1',
  templateUrl: './Api.component.html',
  styleUrls: ['./Api.component.css']
})
export class ApiComponent implements OnInit {
  //datav : data1info;
  datav;
  usersData;
  constructor(private fsObj : FakeDataService) { }

  ngOnInit(): void {
    this.fsObj.getApi().subscribe(
      Data => {
        this.datav = Data;
      },
      err => {
        console.log("Error in Api Data is",err);
      }

    ),
    this.fsObj.getUsers().subscribe(
     uData => {
       this.usersData = uData;
     },
     err => {
       console.log("Error in users Data",err);
     }
    )
  }
  
  

}
