import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DMDataService {

  private url = "https://kol2tai.herokuapp.com"
 
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url+"/api/order/items");
  }

  getById(id :any):Observable<any>{
    return this.http.get(this.url+"/api/order/items/"+id);
  }

}
