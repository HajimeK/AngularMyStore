import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem = {
    product: {
      id: 0,
      name: '',
      description: '',
      url: '',
      price: -1
    },
    quantity: -1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
