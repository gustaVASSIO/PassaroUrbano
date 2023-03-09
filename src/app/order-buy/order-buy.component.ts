import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers:[OrderService]
})
export class OrderBuyComponent {
  
  form: FormGroup = new FormGroup({
    "adress": new  FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    "number":new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
    "complement":new FormControl(null),
    "paymentType":new FormControl(null, [Validators.required])
  })

  idOrderBuy?: number

  constructor(private oder_service: OrderService){}

  ngOnInit(){
    
  }

  confirmPurchase(){

    if(this.validateForm()){
      console.log(this.form)
    }else{
      console.log('form invalid')
    }
    //const {adress, number, complement, payment_type} = this.form.value
    //const order: Order = new Order(adress,number,complement,payment_type)
    //console.log(adress, number, complement, payment_type)
   // this.oder_service.confirmPurchase(order)
    //.subscribe({next:(value)=>this.idOrderBuy = value.id})
  }

  validateForm():boolean{
    if(this.form.status=="INVALID"){
    
      this.form.get('adress')?.markAsTouched()
      this.form.get('number')?.markAsTouched()
      this.form.get('complement')?.markAsTouched()
      this.form.get('paymentType')?.markAsTouched()

      return false
    
    }else{
     
      return true
    }
  }

}
