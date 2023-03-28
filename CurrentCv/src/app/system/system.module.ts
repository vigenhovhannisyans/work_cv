import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './components/system/system.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
  ]
})
export class SystemModule { }
