import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlusPage } from './plus.page';

const routes: Routes = [
  {
    path: '',
    component: PlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlusPageRoutingModule {}
