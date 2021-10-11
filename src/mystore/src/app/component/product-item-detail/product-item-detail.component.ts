import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/model/product';
import { CartItem } from 'src/app/model/cart';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {id: 0, name: '', description: '', url: '', price: -1};
  id : number = -1;
  cartItem : (CartItem | undefined) = {product: this.product, quantity: 0};
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    // get product id to load
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    // load product details
    this.productsService.getProducts().subscribe(async (products) => {
      const product = products.find((product) => product.id === this.id);
      if (product !== undefined) {
        this.product = product;
        // get cart information
        this.cartItem = this.cartService.getCartItem(this.product);

        if( this.cartItem !== undefined) {
          this.quantity = this.cartItem.quantity;
        }
      }
    });
  }

  async onUpdateCount(): Promise<void> {
    try {
      this.cartService.updateItem(this.product, this.quantity);
    } catch (error) {
      console.log(error);
    }
  }

}
