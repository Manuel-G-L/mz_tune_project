import { Component, inject } from '@angular/core';
import { CochesService } from '../../services/coches.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [], // No necesitamos FormsModule si usamos el template reference #t
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})
export class StockComponent {
  // Inyectamos el servicio y lo hacemos 'protected' para usarlo en el HTML
  protected s = inject(CochesService);
}
