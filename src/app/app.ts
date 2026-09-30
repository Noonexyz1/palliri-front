import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from './features/principal/principal';
import { Login } from './features/auth/pages/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Principal, Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('palliri-front');
}
