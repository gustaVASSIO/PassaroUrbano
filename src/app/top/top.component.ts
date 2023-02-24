import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferService } from '../services/offer.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers:[OfferService]
})
export class TopComponent  {
  txtSearch: string = ''
  offer: Observable<Offer[]> = new Observable
  
  constructor(
    private offer_service: OfferService
  ){}

  public updateSearch(event: Event){
    this.txtSearch = (<HTMLInputElement>event.target).value
    if(this.txtSearch!=''||undefined){
      this.search(this.txtSearch)
    }
  }

  public search(str:string): void{
  
      this.offer_service.searchOffer(str).subscribe({
        next(value: Offer[]) {
          console.log(value)
        },
      })
  }
}
