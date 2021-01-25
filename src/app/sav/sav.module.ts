import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavPageRoutingModule } from './sav-routing.module';

import { SavPage } from './sav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavPageRoutingModule
  ],
  declarations: [SavPage]
})
export class SavPageModule {}
