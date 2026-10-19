import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [NgClass],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  @Input() isSidebarOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  cerrarSidebarOpcion() {
    this.closeSidebar.emit();
  }
}
