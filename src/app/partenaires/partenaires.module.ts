import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartenairesPageRoutingModule } from './partenaires-routing.module';

import { PartenairesPage } from './partenaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartenairesPageRoutingModule
  ],
  declarations: [PartenairesPage]
})
export class PartenairesPageModule {}
