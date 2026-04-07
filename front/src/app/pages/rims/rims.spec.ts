import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rims } from './rims';

describe('Rims', () => {
  let component: Rims;
  let fixture: ComponentFixture<Rims>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rims]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rims);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
