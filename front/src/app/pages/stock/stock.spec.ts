import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======

>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
import { Stock } from './stock';

describe('Stock', () => {
  let component: Stock;
  let fixture: ComponentFixture<Stock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
