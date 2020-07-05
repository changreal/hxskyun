import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassDetailPage } from './class-detail.page';

describe('ClassDetailPage', () => {
  let component: ClassDetailPage;
  let fixture: ComponentFixture<ClassDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
