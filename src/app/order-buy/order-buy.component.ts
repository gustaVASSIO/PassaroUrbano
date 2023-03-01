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
  
  // atributos do formulário
  adress: string = ''
  number: string = ''
  complement: string = ''
  payment_type: string = '' 

  // controle de validação dos campos
  validAdress: boolean = false
  validNumber: boolean = false
 
  // controle do estado primitivo dos campos
  primitiveAdress: boolean = true
  primitiveNumber: boolean = true
  
  // controle de habilitação do formulário
  disabled: string = 'disabled'

  constructor(private oder_service: OrderService){}

  ngOnInit(){
    
  }

  // methods of class
  updateAdress(adress:string):void { 
    
    this.primitiveAdress = false

    if(adress.length > 7){
      
      this.validAdress = true
      
      this.adress = adress 
    
    }else{
      this.validAdress = false
    }
    this.enableForm()
  }
  updateNumber(number:string):void { 
    
 
    const reNumber = /[0-9]/
    
    this.primitiveNumber = false
    
    if(number.match(reNumber) &&  parseInt(number)>= 0){
      
      this.validNumber  = true

      this.number = number 
      
    }else{

      this.validNumber = false
    
    }
    this.enableForm()
  }

  updateComplement(complement:string):void { this.complement = complement }
  
  updatePaymentType(payment_type:string):void { this.payment_type = payment_type }

  enableForm(){

    if(this.validAdress && this.validNumber){
    
      this.disabled = ''
    
    }else{
    
      this.disabled = 'disabled'
    
    }
  }

  confirmPurchase(){

    const order: Order = new Order(this.adress,this.number,this.complement,this.payment_type)

    this.oder_service.confirmPurchase(order)
    .subscribe()
  }

}
