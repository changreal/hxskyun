import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSchoolPage } from './edit-school.page';

describe('EditSchoolPage', () => {
  let component: EditSchoolPage;
  let fixture: ComponentFixture<EditSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
