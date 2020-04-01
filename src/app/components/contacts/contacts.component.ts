import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import contactIcons from '../../../assets/contact-icons.json';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() contacts: any[];

  registerForm: FormGroup;

  submitted: boolean = false;

  contactIcons: any[];

  @ViewChild(ModalComponent, { static: false }) modalComponent: ModalComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactIcons = contactIcons;
    this.registerForm = this.formBuilder.group({
      value: ['', Validators.required],
      icon: ['', Validators.required],
      index: ['']
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  editContact(index: number): void {
    this.registerForm.get('value').setValue(this.contacts[index].value);
    this.registerForm.get('icon').setValue(this.contacts[index].icon);
    this.registerForm.get('index').setValue(index);
    this.modalComponent.openModal();
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }

  clearForm(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  openModal(): void {
    this.modalComponent.openModal();
  }

  onSubmit(): boolean{
    let isOk = false;
    this.submitted = true;
    if (this.registerForm.valid) {
      if(this.registerForm.get('index').value != null && this.registerForm.get('index').value !== ''){
        this.contacts[this.registerForm.get('index').value].value = this.registerForm.get('value').value;
        this.contacts[this.registerForm.get('index').value].icon = this.registerForm.get('icon').value;
      } else {
        this.contacts.push({
          value: this.registerForm.get('value').value,
          icon: this.registerForm.get('icon').value
        })
      }
      isOk = true;
      this.modalComponent.closeModal();
    }
    return isOk;
  }

}
