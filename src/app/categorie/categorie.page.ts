import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, IonContent, NavController } from "@ionic/angular";
@Component({
  selector: "app-categorie",
  templateUrl: "./categorie.page.html",
  styleUrls: ["./categorie.page.scss"],
})
export class CategoriePage implements OnInit {
  @ViewChild("slideWithNav3", { static: false }) slideWithNav3: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  sliderThree: any;

  slideOptsThree = {
    initialSlide: 1,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
  };

  constructor() {
    this.sliderThree = {
      isBeginningSlide: true,
      isEndSlide: false,
    };
  }

  ngOnInit() {}

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  todelete = [
    {
      name: "SS Original HM Tee T-Shirt Homme",
      price: "12000 FCFA",
      image: "assets/img/sh-img1.jpg",
    },
    {
      name: "Mini Robe Été Manche Courte",
      price: "9000 FCFA",
      image: "assets/img/sh-img7.jpg",
    },
    {
      name: "SS Original HM Tee T-Shirt Homme",
      price: "12000 FCFA",
      image: "assets/img/sh-img6.jpg",
    },
    {
      name: "Costume 3 pièces Femme",
      price: "4000 FCFA",
      image: "assets/img/sh-img3.jpg",
    },
    {
      name: "Pull Homme Col V ",
      price: "14000 FCFA",
      image: "assets/img/sh-img5.jpg",
    },
    {
      name: "Vmsilla Ls Short Dress Lt",
      price: "5000 FCFA",
      image: "assets/img/sh-img2.jpg",
    },
  ];
}
