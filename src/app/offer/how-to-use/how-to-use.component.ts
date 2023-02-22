import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/shared/offer.model';
import { Observable, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers:[OfferService]
})
export class HowToUseComponent {
  private timeObservableSubscription?: Subscription
  private myObservableSubscription?: Subscription
  public description: string =''
  constructor
  (
    private offer_service: OfferService,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    const id = this.route.parent?.snapshot.params['id']
    this.offer_service.getHowToUseById(id)
    .then((description:string)=>{
        this.description = description
    }) 
  }

}
