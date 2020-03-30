import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSkillComponent } from './progress-skill.component';

describe('ProgressSkillComponent', () => {
  let component: ProgressSkillComponent;
  let fixture: ComponentFixture<ProgressSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
