import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interface/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'cv-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss','./system.component.media.scss']
})
export class SystemComponent implements OnInit {
  public userData!: IUser;
  constructor(
    private readonly userService: UserService,
  ){}

  public ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void{
    this.userService.getUser().subscribe({
      next:(res) => this.userData = res.data,
    })
  }

}
