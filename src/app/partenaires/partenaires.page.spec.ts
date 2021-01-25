import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartenairesPage } from './partenaires.page';

describe('PartenairesPage', () => {
  let component: PartenairesPage;
  let fixture: ComponentFixture<PartenairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenairesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartenairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
