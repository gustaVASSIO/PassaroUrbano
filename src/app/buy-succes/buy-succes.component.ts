import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-succes',
  templateUrl: './buy-succes.component.html',
  styleUrls: ['./buy-succes.component.css']
})
export class BuySuccesComponent {
  @Input() idOrder?: number

}
