import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
