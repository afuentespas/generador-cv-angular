import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-progress-skill',
  templateUrl: './progress-skill.component.html',
  styleUrls: ['./progress-skill.component.scss']
})
export class ProgressSkillComponent implements OnInit {

  @Input() skillName: string;

  @Input() percentage: number;

  constructor() { }

  ngOnInit(): void { }

}
