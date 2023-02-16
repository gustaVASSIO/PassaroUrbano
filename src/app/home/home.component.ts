import { Component } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Offer } from '../shared/offer.model';

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
  
  public offers ?: any[]
  // right way
  constructor(private offerService: OfferService){
    // console.log(this.offerService.getOffers())
  }
  ngOnInit(){
    //this.offers = this.offerService.getOffers()
    this.offerService.getOffers2().then((offers:Offer[]) => this.offers = offers)
  }
}
