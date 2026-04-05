import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, InputText],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KingSize Corp');



}
