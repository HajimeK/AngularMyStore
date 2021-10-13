import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart = { user: {name:'', address: '', ccnum: ''}, items: []};

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart.items = this.cartService.getCartItems();
  }

  numItems(): number {
    return this.cartService.getCartItems().length;
  }

  validateCartItems(): boolean {
    return this.numItems() > 0;
  }

  validateCartUser(): boolean {
    return (this.cartService.user.name.length > 0)
      && (this.cartService.user.address.length > 4)
      && (this.cartService.user.ccnum.length === 16);
  }

  disableOrderButton(): boolean {
    return !((this.validateCartItems()) && (this.validateCartUser()));
  }

  async onOrder(): Promise<void> {
    try {
      this.router.navigateByUrl('/confirmation');
    } catch (error) {
      console.log(error);
    }
  }

}
