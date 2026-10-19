import { Component, signal } from '@angular/core';
import { Aside } from '../aside/aside';
import { TopBar } from '../top-bar/top-bar';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, Aside, TopBar, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  // Puedes usar Signals (recomendado en Angular moderno) o booleanos normales
  isSidebarOpen = signal(false);

  mostrarMenuAside() {
    this.isSidebarOpen.update((open) => !open);
  }

  cerrarSidebarOpcion() {
    this.isSidebarOpen.set(false);
  }
}
