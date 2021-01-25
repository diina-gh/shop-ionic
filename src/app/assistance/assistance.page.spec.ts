import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistancePage } from './assistance.page';

describe('AssistancePage', () => {
  let component: AssistancePage;
  let fixture: ComponentFixture<AssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
