import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventairePageRoutingModule } from './inventaire-routing.module';

import { InventairePage } from './inventaire.page';
import { HeaderPageModule } from "../header/header.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventairePageRoutingModule,
    HeaderPageModule
  ],
  declarations: [InventairePage]
})
export class InventairePageModule {}
