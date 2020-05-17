import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembersPage } from './members.page';

describe('MembersPage', () => {
  let component: MembersPage;
  let fixture: ComponentFixture<MembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
