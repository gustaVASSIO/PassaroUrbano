import { HttpClient, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom, Observable, pipe } from "rxjs"
import { Offer } from "../shared/models/offer.model"
import { map, retry } from 'rxjs/operators'
@Injectable()//é necessário decorar a classe com essa diretiva para indicar que ela poderá fornecer um serviço
export class OfferService{

    private urlAPI: string = 'http://localhost:3000'

    public offers: Offer[] = []
    constructor(private http: HttpClient){}
    
    public getOffers():Promise<Array<Offer>>{
        return firstValueFrom(this.http.get(`${this.urlAPI}/offers`))
                .then((res: any)=>res)
    }
    public getOffersByCategory(category: string): Promise<Array<Offer>>{
        return firstValueFrom(this.http.get(`${this.urlAPI}/offers?category=`+category))
                    .then((res: any)=>res)
    }

    public getOfferById(id: number):Promise<Offer>{
        return firstValueFrom(this.http.get(`${this.urlAPI}/offers?id=`+id))
                .then((res: any)=>res[0])
    }
    public getHowToUseById(id: number): Promise<string>{
        return firstValueFrom(this.http.get(`${this.urlAPI}/how-to-use?id=${id}`))
                .then((res: any)=>{
                    return res[0].description
                })
    }
    public getLocaleById(id: number): Promise<string>{
        return firstValueFrom(this.http.get(`${this.urlAPI}/locale?id=${id}`))
                .then((res: any)=>{
                    return res[0].description
                })
    }
    public searchOffer(search: string): Observable<Offer[]>{

        return this.http.get(`${this.urlAPI}/offers?description_like=${search}`)
        .pipe(
            retry(3),
            map((res: any)=>{
                // console.log(res)
                return res
            })
        )

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