import { Component, OnInit } from '@angular/core';
import { DMDataService } from '../../services/dm-data.service';

@Component({
  selector: 'app-orders-dm',
  templateUrl: './orders-dm.component.html',
  styleUrls: ['./orders-dm.component.css']
})
export class OrdersDMComponent implements OnInit {

  public items$: any;

  constructor(private service: DMDataService) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
  });}
}
