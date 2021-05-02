import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: "app-panier",
  templateUrl: "./panier.page.html",
  styleUrls: ["./panier.page.scss"],
})
export class PanierPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {}

  navigate(url) {
    this.navCtrl.navigateRoot(url);
  }

  navigateForward(url) {
    this.navCtrl.navigateForward(url);
  }

  navigateBack(url) {
    this.navCtrl.navigateBack(url);
  }
  
}
