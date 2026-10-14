import { Component } from '@angular/core';
import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-principal',
  imports: [ThemeToggle],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {}
