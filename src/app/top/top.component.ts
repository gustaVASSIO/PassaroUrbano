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
  
  offer: Observable<Offer[]> = new Observable
  
  constructor(
    private offer_service: OfferService
  ){}

  public search(event: string): void{
      this.offer_service.searchOffer(event).subscribe({
        next(value) {
          console.log(value)
        },
      })
  }
}
