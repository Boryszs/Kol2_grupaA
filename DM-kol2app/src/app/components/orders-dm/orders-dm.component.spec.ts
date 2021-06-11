import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDMComponent } from './orders-dm.component';

describe('OrdersDMComponent', () => {
  let component: OrdersDMComponent;
  let fixture: ComponentFixture<OrdersDMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
