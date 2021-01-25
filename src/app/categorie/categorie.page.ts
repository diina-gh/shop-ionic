import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-categorie",
  templateUrl: "./categorie.page.html",
  styleUrls: ["./categorie.page.scss"],
})
export class CategoriePage implements OnInit {
  public selectedIndex = 0;
  public categories = [
    {
      id: 0,
      title: "ABRASIFS",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 1,
      title: "ACIERS",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 2,
      title: "CHIMIE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 3,
      title: "ELECTRICITE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 4,
      title: "MENUISERIE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 5,
      title: "COMPRES - SEUR",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 6,
      title: "CERCLAGE ET EMBLAGE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 7,
      title: "CONSTRUC - TION",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 8,
      title: "ETANCHEITE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 9,
      title: "LUBRIFIANT",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 10,
      title: "MENUISERIE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
    {
      id: 11,
      title: "MESURE ET PESAGE",
      description: "This is a given categories",
      icon: "flame-outline",
    },
  ];

  public produits = [
    {
      id: 0,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 1,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 2,
      libelle: "BROSSE BOISSEAU A FILS LAITONNES ",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 3,
      libelle: "DISQUE A LAMELLE",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 4,
      libelle: "DISQUE A MEULER ",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 5,
      libelle: "DISQUE A MEULER ACIER",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
      idCat: 0,
    },
    {
      id: 0,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
    },
    {
      id: 0,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
    },
    {
      id: 0,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
    },
    {
      id: 0,
      libelle: "BANDE ABRASIVE SANS FIN",
      description: "This is a given product",
      prixU: 100,
      imgLink: "assets/img/cart-icon.png",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
