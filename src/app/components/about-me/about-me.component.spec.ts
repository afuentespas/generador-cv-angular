import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form validation is not OK', () => {
    expect(component.onSubmit()).toBeFalse();
  });

  it('form validation is OK', () => {
    component.registerForm.get('textInput').setValue('Random Text');
    expect(component.onSubmit()).toBeTrue();
  });

});
