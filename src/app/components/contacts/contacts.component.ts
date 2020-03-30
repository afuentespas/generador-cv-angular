import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() contacts: any;

  constructor() { }

  ngOnInit(): void { }

}
