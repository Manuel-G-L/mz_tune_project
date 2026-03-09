import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodykit } from './bodykit';

describe('Bodykit', () => {
  let component: Bodykit;
  let fixture: ComponentFixture<Bodykit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodykit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodykit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
