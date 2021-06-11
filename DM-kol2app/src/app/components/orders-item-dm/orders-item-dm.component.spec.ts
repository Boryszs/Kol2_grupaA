import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDMComponent } from './orders-item-dm.component';

describe('OrdersItemDMComponent', () => {
  let component: OrdersItemDMComponent;
  let fixture: ComponentFixture<OrdersItemDMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemDMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
