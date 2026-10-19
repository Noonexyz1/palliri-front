import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  imports: [NgClass],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  @Input() isSidebarOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  cerrarSidebarOpcion() {
    this.closeSidebar.emit();
  }

  navegarOpcion(ruta: string) {
    this.router.navigate(['/admin/' + ruta]);
    this.cerrarSidebarOpcion();
  }

  cerrarSesion(ruta: string) {
    this.router.navigate(['/auth/' + ruta]);
    this.cerrarSidebarOpcion();
  }
}
