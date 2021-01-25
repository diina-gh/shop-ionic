import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavPage } from './sav.page';

const routes: Routes = [
  {
    path: '',
    component: SavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavPageRoutingModule {}
