import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadfacesPage } from './headfaces.page';

describe('HeadfacesPage', () => {
  let component: HeadfacesPage;
  let fixture: ComponentFixture<HeadfacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadfacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadfacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
