import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/productservice.service';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.css']
})
export class CarbrandsComponent implements OnInit {

  constructor(private productservice:ProductserviceService) { }
product;
  ngOnInit() {
    this.productservice.getProductDetails().subscribe(data=>
      {
        this.product=data;
      }),err=>
      {
        console.log(err);
      }
  }

}
