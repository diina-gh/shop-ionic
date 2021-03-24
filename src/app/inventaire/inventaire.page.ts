import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-inventaire",
  templateUrl: "./inventaire.page.html",
  styleUrls: ["./inventaire.page.scss"],
})
export class InventairePage implements OnInit {
  avecm: Boolean = false;
  sansm: Boolean = false;
  tout: Boolean = true;
  dropping: Boolean = false;

  constructor() {}

  drop() {
    this.dropping = !this.dropping;
  }

  checkOne() {}

  ngOnInit() {}

  //to delete
  todelete = [
    {
      date: "08/03/2021",
      depotName: "DEPOT1",
      quantity: 3,
      etat: false,
    },
    {
      date: "05/05/2021",
      depotName: "DEPOT2",
      quantity: 14,
      etat: true,
    },
    {
      date: "0702/2021",
      depotName: "DEPOT3",
      quantity: 7,
      etat: false,
    },
    {
      date: "08/03/2021",
      depotName: "DEPOT4",
      quantity: 11,
      etat: true,
    },
    {
      date: "08/03/2021",
      depotName: "DEPOT5",
      quantity: 13,
      etat: false,
    },
    {
      date: "08/03/2021",
      depotName: "DEPOT6",
      quantity: 20,
      etat: true,
    },
    {
      date: "08/03/2021",
      depotName: "DEPOT7",
      quantity: 30,
      etat: true,
    },
  ];
}
