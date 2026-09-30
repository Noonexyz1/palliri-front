import { Injectable, signal } from '@angular/core';

export interface ModalConfig {
  titulo: string;
  mensaje: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  tipo?: 'cargando' | 'advertencia' | 'confirmacion';
  onConfirmar?: () => void;
  onCancelar?: () => void;
}

@Injectable({
  providedIn: 'root', // Disponible en toda la aplicación
})
export class ModalService {
  // Estado reactivo que contiene los datos del modal actual (o null si está cerrado)
  modalData = signal<ModalConfig | null>(null);

  // 1. Mostrar Modal de Cargando
  showLoading(titulo = 'Procesando...', mensaje = 'Por favor espere un momento'): void {
    this.modalData.set({
      titulo,
      mensaje,
      tipo: 'cargando',
    });
  }

  // 2. Mostrar Modal de Advertencia (con Promesa)
  showWarning(titulo: string, mensaje: string, textoBoton = 'Entendido'): Promise<void> {
    return new Promise((resolve) => {
      this.modalData.set({
        titulo,
        mensaje,
        textoConfirmar: textoBoton,
        tipo: 'advertencia',
        onConfirmar: () => {
          this.close();
          resolve();
        },
      });
    });
  }

  // 3. Mostrar Modal de Confirmación (devuelve true si presiona aceptar, false si cancela)
  confirm(
    titulo: string,
    mensaje: string,
    textoConfirmar = 'Aceptar',
    textoCancelar = 'Cancelar',
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.modalData.set({
        titulo,
        mensaje,
        textoConfirmar,
        textoCancelar,
        tipo: 'confirmacion',
        onConfirmar: () => {
          this.close();
          resolve(true);
        },
        onCancelar: () => {
          this.close();
          resolve(false);
        },
      });
    });
  }

  // Cerrar cualquier modal
  close(): void {
    this.modalData.set(null);
  }
}
