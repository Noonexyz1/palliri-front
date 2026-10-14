import { Component } from '@angular/core';
import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [ThemeToggle],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/auth/login']);
  }
}
