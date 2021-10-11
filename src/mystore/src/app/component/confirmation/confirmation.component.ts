import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user: User = {name:'', address: '', ccnum: ''};
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.cartService.getUser();
    this.total = this.cartService.getTotal();
  }

  backToProductList(): void {
    this.cartService.issue();
    this.router.navigateByUrl('/');
  }
}
