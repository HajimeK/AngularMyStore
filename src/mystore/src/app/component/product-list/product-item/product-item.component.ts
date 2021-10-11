import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = {id: 0, name: '', description: '', url: '', price: -1};

  constructor() {  }

  ngOnInit(): void {  }
}
