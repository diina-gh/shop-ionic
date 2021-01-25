import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriePage } from './categorie.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriePageRoutingModule {}
