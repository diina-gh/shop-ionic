import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-plus",
  templateUrl: "./plus.page.html",
  styleUrls: ["./plus.page.scss"],
})
export class PlusPage implements OnInit {
  constructor(private navCtrl: NavController) {}

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
