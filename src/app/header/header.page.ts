import { Component, OnInit } from '@angular/core';
import {NavController,} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: "app-header",
  templateUrl: "./header.page.html",
  styleUrls: ["./header.page.scss"],
})
export class HeaderPage implements OnInit {
  searching: Boolean = false;
  href: any;

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    this.checkPage();
  }

  checkPage() {
    console.log("We here", this.href);
    if (this.href == "/tabs/categorie") {
      console.log("YES YES");
      this.searching = true;
    } else {
      console.log("NOPE");
      this.searching = false;
    }
  }

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
