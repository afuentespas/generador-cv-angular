import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cv-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() text: string;

  registerForm: FormGroup;

  submitted: boolean = false;

  @ViewChild(ModalComponent, { static: false }) modalComponent: ModalComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      textInput: [this.text, Validators.required]
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  openModal(): void {
    this.modalComponent.openModal();
  }

  closeModal(): void {
    this.submitted = false;
    this.modalComponent.closeModal();
  }

  onSubmit(): boolean {
    let isOK = false;
    this.submitted = true;
    if (this.registerForm.valid) {
      this.text = this.registerForm.get('textInput').value;
      this.closeModal();
      isOK = true;
    }
    return isOK;
  }

}
