import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  user: User = {name:'', address: '', ccnum: ''};
  isOrderEnabled: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.cartService.getUser();
    this.isOrderEnabled = !(this.cartService.getTotal() > 0.0);
    console.log(this.isOrderEnabled);
  }

  async onOrder(): Promise<void> {
    try {
      this.cartService.setUser(this.user);
      this.router.navigateByUrl('/confirmation');

    } catch (error) {
      console.log(error);
    }
  }
}
