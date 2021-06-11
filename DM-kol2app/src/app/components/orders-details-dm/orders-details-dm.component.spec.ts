import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsDMComponent } from './orders-details-dm.component';

describe('OrdersDetailsDMComponent', () => {
  let component: OrdersDetailsDMComponent;
  let fixture: ComponentFixture<OrdersDetailsDMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsDMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
