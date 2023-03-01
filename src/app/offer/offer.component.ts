import { Component } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
//recuperando parâmetros com Snapshot
import { ActivatedRoute, Params } from '@angular/router';
import { Offer } from '../shared/models/offer.model';
import { OfferService } from '../services/offer.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OfferService]
})
export class OfferComponent {
  public offer: any = {}
  public firstImage: string = ''

  constructor(
    private route: ActivatedRoute,
    private offer_service: OfferService//injetando offer.service neste componente
  ) { }


  ngOnInit() {
    // pegando paramêtros da rota com subscribe
    this.route.params.subscribe((param: Params)=>{ 
      const {id} = param
       this.offer_service.getOfferById(id)
      .then(ofs => {
        this.offer = ofs
        this.firstImage = this.offer.images[0].url
        this.offer.images = this.offer.images.splice(1, 2)
      })
      .catch(err => {
        console.error(err);
      })
    })
    
    // const { id } = this.route.snapshot.params //utilizando o snapshot para recuperar os parâmetros da rota
    // this.offer_service.getOfferById(id)
    //   .then(ofs => {
    //     this.offer = ofs
    //     this.firstImage = this.offer.images[0].url
    //     this.offer.images = this.offer.images.splice(1, 2)
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
   

    /* 
     o metodo subscribe observa alterações nas rotas
     podendo reagir à essas modificções e realizar 
     alterações nos componentes
   */

    // this.route.params.subscribe(({id})=>{   
    //   console.log(id)
    // })
  
  }

  ngOnDestroy(){
  }
} 
