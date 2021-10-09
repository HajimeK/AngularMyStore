import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = {id: 0, name: '', description: '', url: '', price: -1};
  quantity: number = 0;

  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
  }

  async onUpdateCount(): Promise<void> {
    try {
      this.cartService.updateItem(this.product, this.quantity);
    } catch (error) {
      console.log(error);
    }
  }

}
