import { Component, Input } from '@angular/core';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, switchMap, of} from 'rxjs';
import { OfferService } from '../services/offer.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers:[OfferService]
})
export class TopComponent  {

  offersOsb: Observable<Offer[]> = new Observable
  
  offers: any[] = []
  
  private subjectSearch: Subject<string> = new Subject<string>()
  
  constructor(
    private offer_service: OfferService
  ){}

  // public updateSearch(event: Event){
  //   this.txtSearch = (<HTMLInputElement>event.target).value
  //   if(this.txtSearch!=''|| this.txtSearch!=undefined){
  //     this.search(this.txtSearch)
  //   }
  // }
  ngOnInit(){
    this.offersOsb = this.subjectSearch
    .pipe(
      debounceTime(1 *1000),//executa a ação do switchMap apos 1,5 s
      distinctUntilChanged(),//verifica se o termo da pesquisa atual é diferente do termo da pesquisa anterior 
      switchMap((str: string)=>{
        if(str !== ''){
          // ,console.log('requisição para a api')
          return this.offer_service.searchOffer(str)
        }else{
          return of<Offer[]>([])
        }
    }),
      catchError((err: any)=>{
        return of<Offer[]>([])
      })
    )

    this.offersOsb.subscribe({next:(offer: Offer[])=>{
      this.offers = offer
      console.log("Ofertas", this.offers)
    }})

  }
  
  public search(str:string): void{
      //implementando logica de subject
      this.subjectSearch.next(str)     
  }
}
