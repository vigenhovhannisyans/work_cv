import { Component } from '@angular/core';
import { IProject } from 'src/app/core/interface/project';

@Component({
  selector: 'cv-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss','./project.component.media.scss']
})
export class ProjectComponent {

  public projects: IProject[] = [
    {
      name: 'Belleza Lotus',
      customer: 'Spanish customer',
      description: 'Im developping a full-stack program with which the user can find spa services, see prices, reserve an hour and leave a review.',
      team_size: 1,
      position: 'Angular / NestJs Developer',
      responsibility: 'Create Frontend and Backend functionalities',
      technologies:['Angular','TypeScript','Rxjs','NestJs','Jasmine (UnitTesting)'],
      start_date: new Date(),
    }
  ];

}
