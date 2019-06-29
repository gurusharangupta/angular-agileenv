import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryDetailComponent } from './user-story-detail.component';

describe('UserStoryDetailComponent', () => {
  let component: UserStoryDetailComponent;
  let fixture: ComponentFixture<UserStoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
