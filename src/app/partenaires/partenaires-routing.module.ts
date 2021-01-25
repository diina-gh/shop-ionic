import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartenairesPage } from './partenaires.page';

const routes: Routes = [
  {
    path: '',
    component: PartenairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartenairesPageRoutingModule {}
