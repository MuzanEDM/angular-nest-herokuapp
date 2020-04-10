import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from './footer';

@NgModule({
  imports: [CommonModule, FooterModule],
  exports: [FooterModule]
})
export class AngularNestHerokuappClientModule {}
