import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importem el component que hem creat
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. L'afegim a la llista d'imports
  imports: [RouterOutlet, LlistaElementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'la-teva-app';
}
