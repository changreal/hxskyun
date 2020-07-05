import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInResultPage } from './sign-in-result.page';

describe('SignInResultPage', () => {
  let component: SignInResultPage;
  let fixture: ComponentFixture<SignInResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
