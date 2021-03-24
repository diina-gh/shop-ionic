import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';

import { HeaderPageModule } from "../header/header.module";
import { TabsPageModule } from "../tabs/tabs.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    HeaderPageModule,
    TabsPageModule,
  ],
  declarations: [ProductDetailsPage],
})
export class ProductDetailsPageModule {}
