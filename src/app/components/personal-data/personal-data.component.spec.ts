import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataComponent } from './personal-data.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('PersonalDataComponent', () => {
  let component: PersonalDataComponent;
  let fixture: ComponentFixture<PersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
