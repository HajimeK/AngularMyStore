import { Component, Input, OnInit, OnChanges} from '@angular/core';
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
  buttonLabel: string = "Add To Cart";

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.cartItem = this.cartService.getCartItem(this.product);
    if( this.cartItem !== undefined) {
      this.quantity = this.cartItem.quantity;
      this.buttonLabel = "Update Cart";
    } else {
      this.buttonLabel = "Add To Cart";
    }
  }


  quantityChanged(event: Event): void {
    if(((event as unknown) as number) === 0) {
      console.log(`cart item quantity changed to ${event}`);
      alert(`Press ${this.buttonLabel} to confirm clearing the item in the cart`);
    }
  }

  async onUpdateCount(): Promise<void> {
    try {
      this.cartService.updateItem(this.product, this.quantity);
      if( this.quantity > 0) {
        this.buttonLabel = "Update Cart";
      } else {
        this.buttonLabel = "Add To Cart";
      }

    } catch (error) {
      console.log(error);
    }
  }
}
