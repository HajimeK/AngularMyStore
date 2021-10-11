import { isNgTemplate } from '@angular/compiler';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  user: User = {name:'', address: '', ccnum: ''};
  items : CartItem[] = [];
  total: number = 0.0;
  static updateItem: any;
  public updateCartTotal: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  alretyInTheCart(product: Product): boolean {
    return ((this.items).find((item) => item.product.id === product.id) !== null);
  }

  getCartItem(product: Product) : (CartItem | undefined) {
    return (this.items).find((item) => item.product.id === product.id);
  }

  getCartItems(): CartItem[] {
    return this.items;
  }

  updateItem(product: Product, newQuantity: number) : void {
    // Find an product item in the cart, and get an item index
    const item = (this.items).find((item) => item.product.id === product.id);
    const idx = (this.items).findIndex((item) => item.product.id === product.id);

    // Update the number of the order item
    if (idx >= 0) {
      if (newQuantity === 0) {
        // if the new quentity is 0, then remove from the caart
        (this.items).splice(idx, 1);
      } else {
        (this.items[idx]).quantity = newQuantity;
      }
    } else {
      this.items.push({product: product, quantity: newQuantity})
    }

    // Calculate the total
    this.total = 0;
    this.items.forEach((item) => {
      this.total += item.quantity * item.product.price;
    })
    this.updateCartTotal.emit(this.total);
  }

  getTotal() : number {
    return this.total;
  }

  issue() {
    // In this demo, just clear items
    this.items = [];
    this.updateCartTotal.emit(0);
  }
}
