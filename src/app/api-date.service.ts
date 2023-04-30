import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiDateService {

  constructor(private httpClientInstance:HttpClient) { }
  getData(){
     let url = 'https://www.api.negbuy.com/api/featured_product';
     return this.httpClientInstance.get(url);
  }
}
