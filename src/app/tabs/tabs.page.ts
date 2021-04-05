import { Component, ViewChild } from "@angular/core";
import { IonTabs } from "@ionic/angular";
@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  @ViewChild("tabs", { static: false }) tabs: IonTabs;
  selectedTab: any;
  homeIcon: String = "home-outline";
  categorieIcon: String = "search-outline";
  favorisIcon: String = "heart-outline";
  profilIcon: String = "person-outline";

  constructor() {}

  setCurrentTab() {
    this.resetIcon();
    this.selectedTab = this.tabs.getSelected();
    this.fillIcon();
  }

  resetIcon() {
    this.homeIcon = "home-outline";
    this.categorieIcon = "search-outline";
    this.favorisIcon = "heart-outline";
    this.profilIcon = "person-outline";
  }

  fillIcon() {
    if (this.selectedTab == "home") {
      this.homeIcon = "home";
    }
    if (this.selectedTab == "categorie") {
      this.categorieIcon = "search";
    }
    if (this.selectedTab == "favoris") {
      this.favorisIcon = "heart";
    }
    if (this.selectedTab == "plus") {
      this.profilIcon = "person";
    }
  }
}
