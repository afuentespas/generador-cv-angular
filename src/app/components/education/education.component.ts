import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() education: any;

  constructor() { }

  ngOnInit(): void { }

}
