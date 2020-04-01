import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cv-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  @Input() image: string;

  @Input() firstName: string;

  @Input() lastName: string;

  @Input() occupation: string;

  registerForm: FormGroup;

  submitted: boolean = false;

  @ViewChild(ModalComponent, { static: false }) modalComponent: ModalComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      firstNameInput: [this.firstName, Validators.required],
      lastNameInput: [this.lastName, Validators.required],
      occupationInput: [this.occupation, Validators.required],
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

  onSubmit() : void {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.firstName = this.registerForm.get('firstNameInput').value;
      this.lastName = this.registerForm.get('lastNameInput').value;
      this.occupation = this.registerForm.get('occupationInput').value;
      this.closeModal();
    }
  }

  onFileChange(event) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (event.target.files.length > 0 && acceptedImageTypes.includes(event.target.files[0]['type'])) {
      let fReader = new FileReader();
      fReader.readAsDataURL(event.target.files[0]);
      fReader.onloadend = (event) => this.image = event.target.result.toString();
    }
  }

}
