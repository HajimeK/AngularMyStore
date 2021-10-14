import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Output() userUpdated = new EventEmitter<User>();
  user: User = {name:'', address: '', ccnum: ''};

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.user = this.cartService.getUser();
  }

  updateName(event: Event): void {
    this.user.name = ((event as unknown) as string);
    this.userUpdated.emit(this.user);
  }

  updateAddress(event: Event): void {
    this.user.address = ((event as unknown) as string);
    this.userUpdated.emit(this.user);
  }

  updateCCNum(event: Event): void {
    this.user.ccnum = ((event as unknown) as string);
    this.userUpdated.emit(this.user);
  }

  validate_creditcardnumber(ccnum: string): boolean {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(ccnum);
  }
}
