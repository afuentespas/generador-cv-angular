import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cv-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() text: string;

  registerForm: FormGroup;

  submitted: boolean = false;

  @ViewChild('closeModal') closeModal;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      textInput: [this.text, Validators.required]
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.text = this.registerForm.get('textInput').value;
      this.closeModal.nativeElement.click();
    }
  }

}
