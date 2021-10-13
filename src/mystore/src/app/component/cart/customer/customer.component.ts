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

  updateName(event: Event): void {
    this.user.name = ((event as unknown) as string);
  }

  updateAddress(event: Event): void {
    this.user.address = ((event as unknown) as string);
  }

  updateCCNum(event: Event): void {
    this.user.ccnum = ((event as unknown) as string);
  }

  validate_creditcardnumber(ccnum: string): boolean {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(ccnum);
  }

  disableOrderButton(): boolean {
    return !(this.cartService.getTotal() > 0.0);
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
