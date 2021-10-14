import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css']
})
export class CartPanelComponent implements OnInit {
  items: CartItem[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  numItems(): number {
    return this.items.length;
  }

  total(): number {
    return this.cartService.getTotal();
  }
}
