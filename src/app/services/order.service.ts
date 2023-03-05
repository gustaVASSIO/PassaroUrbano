import { Order } from '../shared/models/order.model'
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs'
@Injectable()
export class OrderService{
    
    private urlAPI: string = 'http://localhost:3000'


    constructor(private http: HttpClient){}

    public confirmPurchase(order: Order): Observable<any>{
        
        let headers = new HttpHeaders()

        headers.append('Content-type','application/json')
        return this.http.post<Response>(
                `${this.urlAPI}/orders`,
                (order),
                ({headers:headers})
        ).pipe(map((res: Response)=>res))

    }

}