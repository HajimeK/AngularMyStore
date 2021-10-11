import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartlink',
  templateUrl: './cartlink.component.html',
  styleUrls: ['./cartlink.component.css']
})
export class CartlinkComponent implements OnInit {
  numInCart: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.updateCartTotal.subscribe((tot:number) => {
      console.log('event subscried');
      console.log(tot);
    })
  }

  itemCount(): number {
    this.numInCart = 0;
    this.cartService.getCartItems().forEach((item) => {
      this.numInCart += item.quantity
    })
    return this.numInCart;
  }
}
