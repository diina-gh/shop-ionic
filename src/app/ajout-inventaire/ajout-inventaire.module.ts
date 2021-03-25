import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutInventairePageRoutingModule } from './ajout-inventaire-routing.module';

import { AjoutInventairePage } from './ajout-inventaire.page';
import { HeaderPageModule } from "../header/header.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutInventairePageRoutingModule,
    HeaderPageModule
  ],
  declarations: [AjoutInventairePage]
})
export class AjoutInventairePageModule {}
