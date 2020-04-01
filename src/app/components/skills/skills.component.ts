import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: any[];

  registerForm: FormGroup;

  submitted: boolean = false;

  @ViewChild(ModalComponent, { static: false }) modalComponent: ModalComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      percentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      index: [null]
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  clearForm(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  editSkill(event: any): void {
    this.registerForm.reset();
    this.registerForm.get('name').setValue(this.skills[event.index].name);
    this.registerForm.get('percentage').setValue(this.skills[event.index].percentage);
    this.registerForm.get('index').setValue(event.index);
    this.modalComponent.openModal();
  }

  deleteSkill(event: any): void {
    this.skills.splice(event.index, 1);
  }

  onSubmit(): boolean { 
    let isOk = false;
    this.submitted = true;
    if (this.registerForm.valid) {
      if(this.registerForm.get('index').value != null && this.registerForm.get('index').value !== ''){
        this.skills[this.registerForm.get('index').value].name = this.registerForm.get('name').value;
        this.skills[this.registerForm.get('index').value].percentage = this.registerForm.get('percentage').value;
      } else {
        this.skills.push({
          name: this.registerForm.get('name').value,
          percentage: this.registerForm.get('percentage').value
        })
      }
      isOk = true;
      this.registerForm.reset();
      this.modalComponent.closeModal();
    }
    return isOk;
  }

}
