import { Component, signal } from '@angular/core';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatFormField, MatInput, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sandbox');

  v = ''
  d = 'king123'

  constructor(private router: Router) {}

  checkValue() {
    if (this.v === this.d) {
      this.router.navigate(['']);
    }
  }


}
