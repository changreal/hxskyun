import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetAccountPage } from './set-account.page';

describe('SetAccountPage', () => {
  let component: SetAccountPage;
  let fixture: ComponentFixture<SetAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
