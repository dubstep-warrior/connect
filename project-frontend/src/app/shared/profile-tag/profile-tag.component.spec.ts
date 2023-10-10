import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTagComponent } from './profile-tag.component';

describe('ProfileTagComponent', () => {
  let component: ProfileTagComponent;
  let fixture: ComponentFixture<ProfileTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
