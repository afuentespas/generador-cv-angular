import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cv-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() languages: any[];

  registerForm: FormGroup;

  submitted: boolean = false;

  @ViewChild(ModalComponent, { static: false }) modalComponent: ModalComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      level: [null, Validators.required],
      index: [null]
    });
  }

  clearForm(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  editLanguage(index: number): void {
    this.registerForm.get('name').setValue(this.languages[index].name);
    this.registerForm.get('level').setValue(this.languages[index].level);
    this.registerForm.get('index').setValue(index);
    this.modalComponent.openModal();
  }

  deleteLanguage(index: number): void {
    this.languages.splice(index, 1);
  }

  onSubmit(): boolean {
    let isOk = false;
    this.submitted = true;
    if (this.registerForm.valid) {
      if(this.registerForm.get('index').value != null && this.registerForm.get('index').value !== ''){
        this.languages[this.registerForm.get('index').value].name = this.registerForm.get('name').value;
        this.languages[this.registerForm.get('index').value].level = this.registerForm.get('level').value;
      } else {
        this.languages.push({
          name: this.registerForm.get('name').value,
          level: this.registerForm.get('level').value
        })
      }
      isOk = true;
      this.modalComponent.closeModal();
    }
    return isOk;
  }

  get f() { 
    return this.registerForm.controls; 
  }

}
