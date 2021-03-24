import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  toHome(){
    this.navCtrl.navigateBack("tabs/home");
  }

}
