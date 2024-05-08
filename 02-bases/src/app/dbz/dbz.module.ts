import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule],
})
export class DbzModule {}
