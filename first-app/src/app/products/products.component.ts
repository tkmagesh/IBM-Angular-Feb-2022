import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productNames : Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newProductName : string){
    this.productNames.push(newProductName);
  }

  onRemoveClick(idx : number){
    this.productNames.splice(idx, 1)
  }

}
