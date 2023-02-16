import { Component } from '@angular/core';
import { OfferService } from '../services/offer.service';
import {Offer} from '../shared/offer.model'
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers:[OfferService]
})
export class RestaurantComponent {
  constructor(private offer_service: OfferService){}
  public restaurants: Array<any>=[]

  ngOnInit(){
      this.offer_service.getOffersByCategory("restaurante")
      .then(offers=>this.restaurants=offers)
  }
}
