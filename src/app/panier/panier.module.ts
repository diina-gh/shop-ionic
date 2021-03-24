import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PanierPageRoutingModule } from './panier-routing.module';
import { HeaderPageModule } from "../header/header.module";
import { TabsPageModule } from "../tabs/tabs.module";

import { PanierPage } from './panier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    HeaderPageModule,
    TabsPageModule,
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
