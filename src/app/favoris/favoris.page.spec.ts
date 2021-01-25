import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavorisPage } from './favoris.page';

describe('FavorisPage', () => {
  let component: FavorisPage;
  let fixture: ComponentFixture<FavorisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
