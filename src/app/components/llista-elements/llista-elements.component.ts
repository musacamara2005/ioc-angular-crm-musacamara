import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { ELEMENTS } from '../../mocks/dades-mock';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // ← Necessari per [(ngModel)]
    TargetaElementComponent,
  ],
  templateUrl: './llista-elements.component.html',
  styleUrls: ['./llista-elements.component.scss'], // canvia a .css si el teu és .css
})
export class LlistaElementsComponent {
  // Dades
  llistaOriginal: Element[] = ELEMENTS;
  llista: Element[] = [...ELEMENTS];

  // ← Aquesta és la propietat que et demana l'error
  textCerca: string = '';

  filtrar(): void {
    const term = this.textCerca.toLowerCase().trim();
    this.llista = this.llistaOriginal.filter((el) =>
      el.nom.toLowerCase().includes(term),
    );
  }

  trackById(index: number, item: Element): number {
    return item.id;
  }
}
