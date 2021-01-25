import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriePage } from './categorie.page';

describe('CategoriePage', () => {
  let component: CategoriePage;
  let fixture: ComponentFixture<CategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
