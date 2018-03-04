import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SettingsService, SitebarService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
   SettingsService,
   SitebarService,
   SharedService
  ]
})
export class ServiceModule { }
