import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart = { user: {name:'', address: '', ccnum: ''}, items: []};

  constructor() { }

  ngOnInit(): void {
  }

}
