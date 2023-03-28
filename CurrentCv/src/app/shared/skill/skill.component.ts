import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/core/interface/skill';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  public skills: ISkill[] = [
    {
      skill: 'Angular',
      percent: 100,
    },
    {
      skill: 'TypeScript',
      percent: 100,
    },
    {
      skill: 'RxJs',
      percent: 80,
    },
    {
      skill: 'SCSS',
      percent: 100,
    },
    {
      skill: 'GIT',
      percent: 100,
    },
    {
      skill: 'Unit Test (Jasmine)',
      percent: 60,
    },
    {
      skill: 'NodeJS / NestJS',
      percent: 40,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
