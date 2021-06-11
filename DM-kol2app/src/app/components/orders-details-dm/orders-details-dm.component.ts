import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DMDataService } from '../../services/dm-data.service';

@Component({
  selector: 'app-orders-details-dm',
  templateUrl: './orders-details-dm.component.html',
  styleUrls: ['./orders-details-dm.component.css']
})
export class OrdersDetailsDMComponent implements OnInit {

  public image: any;
  public text: string;
  public id: number;
  public price:string;
  public title:string;
  constructor(private service: DMDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.paramMap
         .subscribe(params => {
           id = params.get('id');
      });
    
         this.service.getById(id).subscribe(res => {
           this.image = res['image'];
           this.text = res['text'];
           this.price = res['price'];
           this.title = res['title'];
      });
    
  }

}
