import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutInventairePage } from './ajout-inventaire.page';

describe('AjoutInventairePage', () => {
  let component: AjoutInventairePage;
  let fixture: ComponentFixture<AjoutInventairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutInventairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutInventairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
