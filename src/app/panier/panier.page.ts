import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  toDevis(){
    this.navCtrl.navigateForward("devis");
  }

}
