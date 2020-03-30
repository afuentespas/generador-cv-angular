import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryEducationComponent } from './complementary-education.component';

describe('ComplementaryEducationComponent', () => {
  let component: ComplementaryEducationComponent;
  let fixture: ComponentFixture<ComplementaryEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementaryEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementaryEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
