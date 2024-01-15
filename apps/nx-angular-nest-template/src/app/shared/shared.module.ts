import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeSelectorComponent } from './components/dark-mode-selector/dark-mode-selector.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DarkModeSelectorComponent],
  exports: [DarkModeSelectorComponent],
})
export class SharedModule {}
