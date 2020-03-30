import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experience : any;

  constructor() { }

  ngOnInit(): void { }

}
