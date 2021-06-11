import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'orders-item-dm',
  templateUrl: './orders-item-dm.component.html',
  styleUrls: ['./orders-item-dm.component.css']
})
export class OrdersItemDMComponent implements OnInit {

  @Input() id:string;
  @Input() title:string;
  @Input() text:string;
  @Input() image:string;
  @Input() price:string;

  constructor() { }

  ngOnInit(): void {
  }

}
