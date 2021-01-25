import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavPage } from './sav.page';

describe('SavPage', () => {
  let component: SavPage;
  let fixture: ComponentFixture<SavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
