import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers:[OrderService]
})
export class OrderBuyComponent {
  
  @ViewChild('form')form!: NgForm

  idOrderBuy?: number

  constructor(private oder_service: OrderService){}

  ngOnInit(){
    
  }

  confirmPurchase(){
    const {adress, number, complement, payment_type} = this.form.value
    const order: Order = new Order(adress,number,complement,payment_type)
    console.log(adress, number, complement, payment_type)
    this.oder_service.confirmPurchase(order)
    .subscribe({next:(value)=>this.idOrderBuy = value.id})
  }

}
