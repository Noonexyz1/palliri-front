import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icono } from '../../../../shared/components/icono/icono';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Icono],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
