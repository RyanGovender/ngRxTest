import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../Models/Tutorial '
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs';
import {Products} from './../Models/Products';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   products:Products[] =[
    {id:1,name:'Batman PS4',imageUrl:'https://static2.raru.co.za/cover/2016/05/18/4663864-l.jpg?v=1464006769',price:1000},
    {id:2,name:'Batman PS4',imageUrl:'https://static2.raru.co.za/cover/2016/05/18/4663864-l.jpg?v=1464006769',price:2000},
    {id:3,name:'Batman PS4',imageUrl:'https://static2.raru.co.za/cover/2016/05/18/4663864-l.jpg?v=1464006769',price:3000},
   ];
 
  product: Observable<Products[]>;

  constructor(private store: Store<AppState>) { 
    
  }

  addTutorial(name, url,price) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url,price:price}) )
  }

  ngOnInit(): void {

    
  }

}
