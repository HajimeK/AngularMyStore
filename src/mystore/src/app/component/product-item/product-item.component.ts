import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = {id: 0, name: '', description: '', url: '', price: -1};

  constructor(private cartService = CartService) {  }

  ngOnInit(): void {
  }

  async onUpdateCount(quantity: number): Promise<void> {
    try {
      this.cartService.updateItem(this.product, quantity);
    } catch (error) {
      Error(error);
    }
  }

}
