import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutInventairePage } from './ajout-inventaire.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutInventairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutInventairePageRoutingModule {}
