import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  user: User = {name:'', address: '', ccnum: ''};
  items : CartItem[] = [];
  total: number = -1;
  static updateItem: any;

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

    // Update the number of the order item
    if (item) {
      item.quantity = newQuantity;
    } else {
      this.items.push({product: product, quantity: newQuantity})
    }

    // Calculate the total
    this.total = 0;
    this.items.forEach((item) => {
      this.total += item.quantity * item.product.price;
    })
  }

  getTotal() : number {
    return this.total;
  }

  issue() {
    // In this demo, just clear items
    this.items = [];
  }
}
