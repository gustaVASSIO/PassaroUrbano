// utilizando padrão de moeda brasileira
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' 
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FormsModule } from '@angular/forms';
// routes
import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';

import { OfferComponent } from './offer/offer.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { LocaleComponent } from './offer/locale/locale.component';
import { ShortDescription } from './shared/short-description.pipe';
import { OrderBuyComponent } from './order-buy/order-buy.component';
import { BuySuccesComponent } from './buy-succes/buy-succes.component';
registerLocaleData(localePt,'pt');


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent,
    EntertainmentComponent,
    OfferComponent,
    HowToUseComponent,
    LocaleComponent,
    ShortDescription,
    OrderBuyComponent,
    BuySuccesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide:LOCALE_ID, useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
