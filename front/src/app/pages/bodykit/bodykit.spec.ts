import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bodykits } from './bodykit';

describe('Bodykit', () => {
  let component: Bodykits;
  let fixture: ComponentFixture<Bodykits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodykits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodykits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
