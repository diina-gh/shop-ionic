import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunicationPage } from './communication.page';

describe('CommunicationPage', () => {
  let component: CommunicationPage;
  let fixture: ComponentFixture<CommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
