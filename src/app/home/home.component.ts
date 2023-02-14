import { Component } from '@angular/core';
import { OfferService } from '../services/offer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // right way
  providers:[OfferService]
})
export class HomeComponent {
  // wrong way to use service
  // public offerService: OfferService = new OfferService()
  
  // right way
  constructor(private offerService: OfferService){
    // console.log(this.offerService.getOffers())
    console.log(this.offerService.getOffers())
  }
}
