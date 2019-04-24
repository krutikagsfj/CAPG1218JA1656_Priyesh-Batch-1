import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private hc:HttpClient) { }
  getProductDetails()
  {
    let url="assets/productBrands.json";
    return this.hc.get(url);
  }
}
