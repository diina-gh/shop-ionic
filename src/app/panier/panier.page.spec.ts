import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanierPage } from './panier.page';

describe('PanierPage', () => {
  let component: PanierPage;
  let fixture: ComponentFixture<PanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
