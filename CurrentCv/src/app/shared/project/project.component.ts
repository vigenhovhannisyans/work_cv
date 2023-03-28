import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/core/interface/project';

@Component({
  selector: 'cv-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss','./project.component.media.scss']
})
export class ProjectComponent {
  @Input()
  public projects: IProject[] = [];
}
