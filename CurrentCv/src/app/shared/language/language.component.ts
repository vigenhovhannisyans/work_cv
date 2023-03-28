import { Component, Input } from '@angular/core';
import { ILanguage } from 'src/app/core/interface/language';

@Component({
  selector: 'cv-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Input()
  public languages: ILanguage[] = [];
}
