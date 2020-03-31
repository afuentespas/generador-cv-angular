import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title: string;

  @Input() fontAwesomeIcon: string;

  @Input() inverse: boolean = false;

  @Input() modalId: string;

  @Input() isEdit: boolean;

  constructor() { }

  ngOnInit(): void { }

}
