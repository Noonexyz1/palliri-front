import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-icono',
  imports: [NgClass],
  templateUrl: './icono.html',
  styleUrl: './icono.css',
})
export class Icono {
  colorIcono: string = 'text-violet-500 dark:text-slate-300';

  @Input({ required: true }) nombreIcono!: string;
  @Input({ required: true }) isBordered: boolean = true;
}
