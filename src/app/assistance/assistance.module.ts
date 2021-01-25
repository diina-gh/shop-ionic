import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistancePageRoutingModule } from './assistance-routing.module';

import { AssistancePage } from './assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistancePageRoutingModule
  ],
  declarations: [AssistancePage]
})
export class AssistancePageModule {}
