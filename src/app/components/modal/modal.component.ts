import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'cv-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  @Input() title: string;

  @Input() icon: string = 'fas fa-plus';

  @Input() isPersonalSection: boolean = false;

  @Input() inverseColor: boolean = false;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  openModal(): void {
    this.modal.show();
  }

  closeModal(): void {
    this.modal.hide();
  }

  onSubmit(): void {
    this.submitEvent.emit();
  }

}
