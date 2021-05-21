import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { data1 } from './models/data1.model';
@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private hc : HttpClient) { }

  getApi():Observable<any>{
    return this.hc.get<any>("https://reqres.in/api/unknown");

  }
  getUsers():Observable<any>{
    return this.hc.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  getUsersData(id): Observable<any>{
    return this.hc.get<any>("http://localhost:3000/users/" + id);
  }
}
