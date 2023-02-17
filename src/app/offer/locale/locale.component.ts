import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent {
  constructor
  (
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    const id = this.route.parent?.snapshot.params['id']
    console.log(id)
  }
}
