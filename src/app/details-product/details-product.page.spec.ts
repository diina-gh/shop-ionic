import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsProductPage } from './details-product.page';

describe('DetailsProductPage', () => {
  let component: DetailsProductPage;
  let fixture: ComponentFixture<DetailsProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
