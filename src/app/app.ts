import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from './features/principal/principal';
import { Login } from './features/auth/pages/login/login';
import { ModalService } from './shared/components/modales/modal-layout/modal.service';
import { ModalLayout } from './shared/components/modales/modal-layout/modal-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Principal, Login, ModalLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('palliri-front');
}
