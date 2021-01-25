import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlusPage } from './plus.page';

describe('PlusPage', () => {
  let component: PlusPage;
  let fixture: ComponentFixture<PlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
