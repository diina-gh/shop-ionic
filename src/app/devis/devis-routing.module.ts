import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisPage } from './devis.page';

const routes: Routes = [
  {
    path: '',
    component: DevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisPageRoutingModule {}
