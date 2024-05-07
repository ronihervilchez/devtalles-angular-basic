import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
  providers: [],
})
export class HeroesModule {}
