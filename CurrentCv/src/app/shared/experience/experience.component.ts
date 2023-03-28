import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/core/interface/experience';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', './experience.component.media.scss']
})
export class ExperienceComponent {
  @Input()
  public experiences: IExperience[] = [];
}
