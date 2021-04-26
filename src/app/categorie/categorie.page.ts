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
    slidesPerView: 3,
    loop: true,
    centeredSlides: false,
   
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
}
