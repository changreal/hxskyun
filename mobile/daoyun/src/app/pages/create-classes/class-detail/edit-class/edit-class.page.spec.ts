import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditClassPage } from './edit-class.page';

describe('EditClassPage', () => {
  let component: EditClassPage;
  let fixture: ComponentFixture<EditClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
