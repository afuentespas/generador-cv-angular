import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  @Input() image: string;

  @Input() firstName: string;

  @Input() lastName: string;

  @Input() occupation: string;

  constructor() { }

  ngOnInit(): void { }

  onFileChange(event) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (event.target.files.length > 0 && acceptedImageTypes.includes(event.target.files[0]['type'])) {
      let fReader = new FileReader();
      fReader.readAsDataURL(event.target.files[0]);
      fReader.onloadend = (event) => this.image = event.target.result.toString();
    }
  }

}
