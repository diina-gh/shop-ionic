import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageModule } from "../header/header.module";
import { TabsPageModule } from "../tabs/tabs.module";


import { DevisPageRoutingModule } from './devis-routing.module';
import { DevisPage } from './devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisPageRoutingModule,
    HeaderPageModule,
    TabsPageModule,
  ],
  declarations: [DevisPage]
})
export class DevisPageModule {}
