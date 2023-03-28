import { Component, Input } from '@angular/core';
import { IEducation } from 'src/app/core/interface/education';

@Component({
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input()
  public educations: IEducation[] = [];
}
