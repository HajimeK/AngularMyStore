import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css']
})
export class CartPanelComponent implements OnInit {
  cart : Cart = { user: {name:'', address: '', ccnum: ''}, items: []};

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart.items = this.cartService.getCartItems();
  }

  numItems(): number {
    return this.cartService.getCartItems().length;
  }

  total(): number {
    return this.cartService.getTotal();
  }
}
