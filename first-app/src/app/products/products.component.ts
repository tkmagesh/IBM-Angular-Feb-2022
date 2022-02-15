import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productNames : Array<string> = [
    'Pen',
    'Pencil',
    'Marker',
    'Scribble-Pad'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
