import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userObj;
  constructor(private ar : ActivatedRoute,private fs: FakeDataService) { }

  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;
   
    //get data of users with this current id  
    this.fs.getUsersData(id).subscribe(
      obj => {
        this.userObj = obj;
      }, 
      err => {
        console.log("error in user data",err);
      }
    )

  }

}
