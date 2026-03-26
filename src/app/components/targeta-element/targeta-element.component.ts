import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Cuidaaaooo! Això es necessari per als Pipes!
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <!-- Exercici 3: Ús obligatori de Pipe 'uppercase' segons enunciat -->
      <h3>{{ element.nom | uppercase }}</h3>

      <div class="card-body">
        <p><strong>ID:</strong> {{ element.id }}</p>

        <p>
          <strong>Valor:</strong> {{ element.valorNumeric | currency: 'EUR' }}
        </p>

        <p *ngIf="element.descripcio" class="nota">
          {{ element.descripcio }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        padding: 1.5rem;
        border-radius: 12px;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s;
      }
      .card:hover {
        //Aixo fara que quan fiqui el ratoli es moura la targeta una mica
        transform: translateY(-5px);
        border-color: #06182b;
      }
      h3 {
        margin-top: 0;
        color: #007bff;
        border-bottom: 2px solid #f8f9fa;
        padding-bottom: 10px;
      }
      .nota {
        font-style: italic;
        color: #6c757d;
        font-size: 0.9rem;
        border-top: 1px solid #eee;
        margin-top: 10px;
        padding-top: 10px;
      }
    `,
  ],
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: Element;
}
