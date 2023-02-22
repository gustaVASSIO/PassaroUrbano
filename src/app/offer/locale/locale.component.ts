import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css'],
  providers:[OfferService]
})
export class LocaleComponent {
  description:string = ''
  constructor
  (
    private route: ActivatedRoute,
    private offer_service: OfferService
  ){}
  ngOnInit(){
    const id = this.route.parent?.snapshot.params['id']
    this.offer_service.getLocaleById(id)
    .then((description:string)=>{
        this.description = description
    }) 
  }
}
