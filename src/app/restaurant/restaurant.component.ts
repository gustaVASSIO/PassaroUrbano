import { Component } from '@angular/core';
import { OfferService } from '../services/offer.service';
import {Offer} from '../shared/models/offer.model'
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers:[OfferService]
})
export class RestaurantComponent {
  

  public restaurants: Array<any>=[]

  // dateTest: Date = new Date(2023,1,26)

  constructor(private offer_service: OfferService){}

  ngOnInit(){
      this.offer_service.getOffersByCategory("restaurante")
      .then(offers=>this.restaurants=offers)
  }
}
