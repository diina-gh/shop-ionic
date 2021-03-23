import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonContent, NavController } from "@ionic/angular";


@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  @ViewChild("slideWithNav", { static: false }) slideWithNav: IonSlides;
  @ViewChild("slideWithNav2", { static: false }) slideWithNav2: IonSlides;
  @ViewChild("slideWithNav3", { static: false }) slideWithNav3: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  feed: Boolean = false;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: false,
    centeredSlides: false,
    spaceBetween: 15,
    autoplay: true,
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
  };

  constructor( private navCtrl: NavController) {
    //Item object for Nature
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false,
    };
    //Item object for Food
    this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
    };
    //Item object for Fashion
    this.sliderThree = {
      isBeginningSlide: true,
      isEndSlide: false,
    };
  }

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

  ngOnInit() {}

  feeding() {
    this.feed = !this.feed;
    this.content.scrollByPoint(0, 510, 650);
  }

  toProductDetails(){
    this.navCtrl.navigateForward("product-details");
  }

}