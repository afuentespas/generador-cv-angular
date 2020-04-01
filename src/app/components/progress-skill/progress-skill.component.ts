import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cv-progress-skill',
  templateUrl: './progress-skill.component.html',
  styleUrls: ['./progress-skill.component.scss']
})
export class ProgressSkillComponent implements OnInit {

  @Input() skillName: string;

  @Input() percentage: number;

  @Input() index: number;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  editSkill(): void {
    this.edit.emit({index: this.index});
  }

  deleteSkill(): void {
    this.delete.emit({index: this.index});
  }

}
