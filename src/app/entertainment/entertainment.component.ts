import { Component } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Offer } from '../shared/offer.model';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  constructor(private offer_service: OfferService){}
  public offers: Array<any>=[]

  ngOnInit(){
      this.offer_service.getOffersByCategory("diversao")
      .then(offers=>this.offers=offers)
  }
}
