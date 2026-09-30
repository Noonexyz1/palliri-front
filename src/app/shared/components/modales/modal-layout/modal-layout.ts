import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';
import { Icono } from '../../icono/icono';

@Component({
  selector: 'app-modal-layout',
  imports: [Icono],
  templateUrl: './modal-layout.html',
  styleUrl: './modal-layout.css',
})
export class ModalLayout {
  modalService = inject(ModalService);
}
