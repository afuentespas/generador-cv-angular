import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-complementary-education',
  templateUrl: './complementary-education.component.html',
  styleUrls: ['./complementary-education.component.scss']
})
export class ComplementaryEducationComponent implements OnInit {

  @Input() courses: any;

  constructor() { }

  ngOnInit(): void { }

}
