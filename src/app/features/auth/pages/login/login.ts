import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icono } from '../../../../shared/components/icono/icono';
import { ModalService } from '../../../../shared/components/modales/modal-layout/modal.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Icono],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private modal = inject(ModalService);

  // Ejemplo 1: Modal de cargando
  guardar(): void {
    this.modal.showLoading('Guardando registro', 'Por favor espere...');

    setTimeout(() => {
      this.modal.close(); // Cierra el modal cuando termina la petición
    }, 2500);
  }

  // Ejemplo 2: Advertencia
  async advertir(): Promise<void> {
    await this.modal.showWarning(
      'Atención',
      'No tienes permisos suficientes para realizar esta acción.',
    );
    console.log('El usuario dio clic en Entendido');
  }

  // Ejemplo 3: Confirmación (Devuelve true o false)
  async eliminar(): Promise<void> {
    const respuesta = await this.modal.confirm(
      '¿Eliminar usuario?',
      'Esta acción borra de forma permanente toda la información.',
      'Sí, borrar',
      'Cancelar',
    );

    if (respuesta) {
      console.log('¡El usuario confirmó la eliminación!');
      // Tu código para borrar en la API...
    } else {
      console.log('El usuario canceló');
    }
  }
}
