import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private router : Router,private fsObj : FakeDataService) { }

  mySubscription : any;
  ngOnInit(): void {
    this.mySubscription = this.fsObj.getUsers().subscribe(
      userData => {
        this.users = userData;
      },
      err => {
        console.log("Error in Users Data",err);
      }
    )
  }
   onSelectId(id) {
    this.router.navigateByUrl("users/" + id);
   }
   ngOnDestroy() {
     this.mySubscription.unsubscribe();
   }

}


