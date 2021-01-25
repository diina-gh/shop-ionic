import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.page";

import { HeaderPageModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
