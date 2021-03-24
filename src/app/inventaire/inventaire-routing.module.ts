import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventairePage } from './inventaire.page';

const routes: Routes = [
  {
    path: '',
    component: InventairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventairePageRoutingModule {}
