import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from './models/mobile.model';
import {product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc :HttpClient) { }
  laptops : product [] = [
    

  ];

  mobiles : product[] = [

    
    ];

    televisions : product[] = [
      
    ];


  getLaptopsData() :Observable<product[]>{
    return this.hc.get<product[]>("http://localhost:3000/laptops");
  }

  getMobilesData() : Observable<Mobile[]> {
    return this.hc.get<Mobile[]>("http://localhost:3000/mobiles");
  }

  getTelevisionsData() : Observable<product[]> {
    return this.hc.get<product[]>("http://localhost:3000/televisions ");
  }

  /*getTelevisionsData() : product[] {
    return this.televisions;
  }*/

  createNewMobile(mobileObj) : Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)

  }

  //update mobile
  updateMobile(modifiedMobileObj) : Observable<any>{
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObj.id,modifiedMobileObj);
  }

  deleteMobile(id) : Observable<any>{
    console.log("Id is",id);
    return this.hc.delete("http://localhost:3000/mobiles/"+id);
  }
  

}
