import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YuanxiPage } from './yuanxi.page';

describe('YuanxiPage', () => {
  let component: YuanxiPage;
  let fixture: ComponentFixture<YuanxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuanxiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YuanxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
