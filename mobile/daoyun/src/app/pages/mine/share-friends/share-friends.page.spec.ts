import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareFriendsPage } from './share-friends.page';

describe('ShareFriendsPage', () => {
  let component: ShareFriendsPage;
  let fixture: ComponentFixture<ShareFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFriendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
