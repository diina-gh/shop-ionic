import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierPage } from './panier.page';

const routes: Routes = [
  {
    path: '',
    component: PanierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanierPageRoutingModule {}
