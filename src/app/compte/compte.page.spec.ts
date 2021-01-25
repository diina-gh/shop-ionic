import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptePage } from './compte.page';

describe('ComptePage', () => {
  let component: ComptePage;
  let fixture: ComponentFixture<ComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
