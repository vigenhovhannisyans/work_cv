import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';
import { SummaryComponent } from './summary/summary.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    ProjectComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    LanguageComponent,
    SummaryComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    LanguageComponent,
    SummaryComponent,
    InfoComponent,
  ]
})
export class SharedModule { }
