import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsProductPage } from './details-product.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsProductPageRoutingModule {}
