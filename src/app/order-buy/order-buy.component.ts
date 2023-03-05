import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers:[OrderService]
})
export class OrderBuyComponent {
   
  idOrderBuy?: number

  constructor(private oder_service: OrderService){}

  ngOnInit(){
    
  }

  confirmPurchase(){

    const order: Order = new Order('','','','')

    this.oder_service.confirmPurchase(order)
    .subscribe({next:(value)=>this.idOrderBuy = value.id})
  }

}
