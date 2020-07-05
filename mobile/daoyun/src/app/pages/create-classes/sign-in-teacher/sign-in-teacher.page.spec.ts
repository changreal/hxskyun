import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInTeacherPage } from './sign-in-teacher.page';

describe('SignInTeacherPage', () => {
  let component: SignInTeacherPage;
  let fixture: ComponentFixture<SignInTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
