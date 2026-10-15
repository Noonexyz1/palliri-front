import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [NgClass],
  templateUrl: './persona.html',
  styleUrl: './persona.css',
})
export class Persona {
  // En escritorio puedes iniciar en true si quieres que se muestre por defecto
  isSidebarOpen: boolean = false;

  mostrarMenuAside() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Cierra el sidebar al hacer clic en una opción (útil para móviles)
  cerrarSidebarOpcion() {
    // Opcional: podrías evaluar si estás en mobile con window.innerWidth < 1024
    if (window.innerWidth < 1024) {
      this.isSidebarOpen = false;
    }
  }

}
