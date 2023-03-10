import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { CarShopService } from '../services/carshop.service';
import { OrderService } from '../services/order.service';
import { ItemCarshop } from '../shared/models/carshop.model';
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
    "paymentType":new FormControl("", [Validators.required])
  })

  idOrderBuy?: number

  itensCarShop: ItemCarshop[] = []

  constructor(
    private oder_service: OrderService,
    public carshop_service: CarShopService
    ){}

  ngOnInit(){
    
    this.itensCarShop = this.carshop_service.getItens()
    //this.totalItens = this.carshop_service.calcTotal()
  }

  confirmPurchase(){

    if(this.validateForm()){
     if(this.itensCarShop.length !== 0){
       
        const {adress, number, complement, payment_type} = this.form.value
        
        const order: Order = new Order(adress,number,complement,payment_type, this.itensCarShop)
        
        console.log(order)
        
        this.oder_service.confirmPurchase(order)
        .subscribe({next:(value)=>{
          this.idOrderBuy = value.id
          this.carshop_service.clearCarShop()
          this.itensCarShop = []
        }})
     
    
      }else{
      alert('Você não possui itens no seu carrinho')
     }
    }else{
      console.log('form invalid')
    }

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

  addAmount(item: ItemCarshop){
      this.carshop_service.addAmount(item)
  }

  subtractAmount(item: ItemCarshop){
    this.carshop_service.subtractAmount(item)
  }

}
