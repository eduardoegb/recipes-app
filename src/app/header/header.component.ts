import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() selected = new EventEmitter<string>();

  onSelect(optionSelected: string) {
    this.selected.emit(optionSelected);
  }
}
