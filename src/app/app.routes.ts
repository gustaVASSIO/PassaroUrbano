import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {RestaurantComponent} from './restaurant/restaurant.component'
import {EntertainmentComponent} from './entertainment/entertainment.component'
import { OfferComponent } from './offer/offer.component'
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component'
import { LocaleComponent } from './offer/locale/locale.component'

export const ROUTES: Routes =[
    {path:'', component:HomeComponent},
    {path:'restaurants', component:RestaurantComponent},
    {path:'entertainment', component:EntertainmentComponent},
    {path:'offer',component:HomeComponent},
    {path:'offer/:id',component:OfferComponent,
    //configurando rotas filhas desse componente
    children:[
        {path:"", component:HowToUseComponent},
        {path:"how-to-use", component:HowToUseComponent},
        {path:'locale', component:LocaleComponent}
    ]
    }
]