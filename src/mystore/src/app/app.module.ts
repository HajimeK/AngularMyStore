import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ProductItemComponent } from './component/product-list/product-item/product-item.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HeaderComponent } from './component/header/header.component';
import { CartItemComponent } from './component/cart/cart-item/cart-item.component';
import { CustomerComponent } from './component/cart/customer/customer.component';
import { QuntitywidgetComponent } from './component/quntitywidget/quntitywidget.component';
import { CartlinkComponent } from './component/header/cartlink/cartlink.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent,
    CartItemComponent,
    CustomerComponent,
    QuntitywidgetComponent,
    CartlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatBadgeModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
