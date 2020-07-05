import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPasswordPage } from './edit-password.page';

describe('EditPasswordPage', () => {
  let component: EditPasswordPage;
  let fixture: ComponentFixture<EditPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
