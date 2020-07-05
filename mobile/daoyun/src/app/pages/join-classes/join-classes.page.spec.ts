import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinClassesPage } from './join-classes.page';

describe('JoinClassesPage', () => {
  let component: JoinClassesPage;
  let fixture: ComponentFixture<JoinClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinClassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
