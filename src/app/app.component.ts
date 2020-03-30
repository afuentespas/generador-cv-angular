import { Component, OnInit } from '@angular/core';
import cvMock from '../assets/cv-json/afp.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cv: any;

  ngOnInit(): void {
    this.cv = cvMock;
  }
  
}
