import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateClassesPage } from './create-classes.page';

describe('CreateClassesPage', () => {
  let component: CreateClassesPage;
  let fixture: ComponentFixture<CreateClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
