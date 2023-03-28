import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interface/user';

@Component({
  selector: 'cv-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss','./info.component.media.scss']
})
export class InfoComponent {
  @Input()
  public userInfo!: IUser;
}
