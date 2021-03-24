import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventairePage } from './inventaire.page';

describe('InventairePage', () => {
  let component: InventairePage;
  let fixture: ComponentFixture<InventairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
