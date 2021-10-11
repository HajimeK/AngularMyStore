import { Component, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/model/product';
import { CartItem } from 'src/app/model/cart';

@Component({
  selector: 'app-quntitywidget',
  templateUrl: './quntitywidget.component.html',
  styleUrls: ['./quntitywidget.component.css']
})
export class QuntitywidgetComponent implements OnInit {
  @Input() product: Product = {id: 0, name: '', description: '', url: '', price: -1};
  cartItem : (CartItem | undefined) = {product: this.product, quantity: 0};
  quantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItem = this.cartService.getCartItem(this.product);
    if( this.cartItem !== undefined) {
      this.quantity = this.cartItem.quantity;
    }
  }

  async onUpdateCount(): Promise<void> {
    try {
      this.cartService.updateItem(this.product, this.quantity);
    } catch (error) {
      console.log(error);
    }
  }
}
