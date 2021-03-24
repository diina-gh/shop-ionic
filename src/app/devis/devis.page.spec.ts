import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevisPage } from './devis.page';

describe('DevisPage', () => {
  let component: DevisPage;
  let fixture: ComponentFixture<DevisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
