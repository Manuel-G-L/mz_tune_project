import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bodykits } from './bodykit';

// Suite de pruebas para el componente Bodykits
describe('Bodykit', () => {
  let component: Bodykits;
  let fixture: ComponentFixture<Bodykits>;

  // Before each hace que se ejecute antes de cada test individual
  beforeEach(async () => {
    // Test Bed crea un módulo de pruebas para el componente Bodykits
    await TestBed.configureTestingModule({
      imports: [Bodykits]
    })
    .compileComponents();

    // Crea una instancia del componente y la asigna a la variable component
    fixture = TestBed.createComponent(Bodykits);
    // Asigna la instancia del componente a la variable component
    component = fixture.componentInstance;
    // Detecta los cambios para actualizar la vista del componente
    await fixture.whenStable();
  });

  // Test Básico para  verificar que el componente se crea correctamente
  it('should create', () => {
    // Verifica que el componente se haya creado correctamente
    expect(component).toBeTruthy();
  });
});
