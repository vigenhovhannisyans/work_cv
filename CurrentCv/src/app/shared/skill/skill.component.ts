import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/core/interface/skill';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input()
  public skills: ISkill[] = []
}
