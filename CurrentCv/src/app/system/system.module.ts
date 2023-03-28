import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SystemComponent } from './components/system/system.component';
import { UserService } from '../core/services/user/user.service';



@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ]
})
export class SystemModule { }
