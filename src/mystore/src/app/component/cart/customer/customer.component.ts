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

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.cartService.getUser();
  }

  evaluateCustomer(): boolean {
    return (this.user.name ==='') || (this.user.address === '') || (this.user.ccnum ==='');
  }

  disableOrderButton(): boolean {
    return !(this.cartService.getTotal() > 0.0) || this.evaluateCustomer();
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
