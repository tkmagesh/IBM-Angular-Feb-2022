import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResultComponent } from './calculator-result.component';

describe('CalculatorResultComponent', () => {
  let component: CalculatorResultComponent;
  let fixture: ComponentFixture<CalculatorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
