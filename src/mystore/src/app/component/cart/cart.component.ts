import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void { }

  numItems(): number {
    return this.cartService.getCartItems().length;
  }

  validateCartItems(): boolean {
    return this.numItems() > 0;
  }

  updateUser(updatedUser: User): void {
    this.cartService.setUser(updatedUser);
  }

  validateCartUser(): boolean {
    const user: User = this.cartService.getUser();
    return (user.name.length > 0)
      && (user.address.length > 4)
      && (user.ccnum.length === 16);
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
