import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() languages: any[];

  constructor() { }

  ngOnInit(): void { }

}
