import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-theme-toggle',
   imports: [],
   templateUrl: './theme-toggle.html',
   styleUrl: './theme-toggle.css',
})
export class ThemeToggle implements OnInit {
   isDarkMode: boolean = false;

   ngOnInit(): void {
      // Al inicializar, verificamos qué modo está activo actualmente en el HTML
      this.isDarkMode = document.documentElement.classList.contains('dark');
   }

   toggleTheme(): void {
      // Invertimos el estado de la variable
      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('color-theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('color-theme', 'light');
      }
   }

}
