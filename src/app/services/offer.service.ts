import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs"
import { Offer } from "../shared/offer.model"

@Injectable()//é necessário decorar a classe com essa diretiva para indicar que ela poderá reeceber um serviço externo
export class OfferService{
    public offers: Offer[] = []
    constructor(private http: HttpClient){}
    
    public getOffers():Promise<Array<Offer>>{
        return firstValueFrom(this.http.get("http://localhost:3000/offers"))
                .then((res: any)=>res)
    }
    public getOffersByCategory(category: string): Promise<Array<Offer>>{
        return firstValueFrom(this.http.get("http://localhost:3000/offers?category="+category))
                    .then((res: any)=>res)
    }

    public getOfferById(id: number):Promise<Array<Offer>>{
        return firstValueFrom(this.http.get("http://localhost:3000/offers?id="+id))
                .then((res: any)=>res)
    }

    // Utilizando metodo getOffers de forma assíncrona
//     public getOffers2():Promise<Array<Offer>>{
        
//         return new Promise((resolve,reject)=>{
//             // console.log('Passando pela promise')
//             let ok = true
//             if(ok){
//                 //simulando latencia de resposta de uma API
//                 setTimeout(()=>{resolve(this.offers)},3000)
                
//             }else{
//                 reject({status:404, msg:"Not Found"})
//             }
//         }).then((offers:Array<Offer> | any)=>{
//             //realizar tratativas
//             console.log(typeof(offers))
//             return offers
//         })
    
//     }
 }