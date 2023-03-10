import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ItemCarshop } from "../shared/models/carshop.model";
import { Offer } from "../shared/models/offer.model";

@Injectable()
class CarShopService{

    public itens: Array<ItemCarshop> = []

    constructor(private http:HttpClient){}    

    public getItens(){
        return this.itens
    }

    public addItem(offer: Offer){
        const item = new  ItemCarshop(
            offer.id,
            offer.images[0],
            offer.title,
            offer.description,
            offer.value,
            1
        )

        //atribuir a referencia para o objeto dentro do array e alterar o valor de um atributo
        const itemFind = this.itens.find((itemCarShop:ItemCarshop) => item.id === itemCarShop.id)

        if(!itemFind){
            
            this.itens.push(item)
        
        }else{

            itemFind.amount += 1

        } 

    }    

    calcTotal(){
        let total = 0
        this.itens.map(item =>{
            total += item.amount * item.value
        })
        return total
    }

    addAmount(item: ItemCarshop){
        const  itemFind = this.itens.find(ItemCarshop=>ItemCarshop.id === item.id)
        itemFind ? itemFind.amount+=1 : undefined
    }

    subtractAmount(item: ItemCarshop){
        const  itemFind = this.itens.find(ItemCarshop=>ItemCarshop.id === item.id)

       if(itemFind !== undefined){
            if(itemFind.amount >1){
                itemFind.amount-=1
            }else{
                const i = this.itens.indexOf(itemFind)
                this.itens.splice(i,1)
            }
       }
    }

    clearCarShop(){
        this.itens = []
    }
}

export {CarShopService}