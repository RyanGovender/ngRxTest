import { Action } from '@ngrx/store'
import { Tutorial } from '../../app/Models/Tutorial '
import * as TutorialActions from './../actions/tutorial.actions'
import { isNgTemplate } from '@angular/compiler';
import { Products } from '../Models/Products';

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com',
    price:0
}

const initialProducts : Products[] = [{id:1,name:'Batman PS4',imageUrl:'',price:1000}];

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions, productstate:Products[] = [{id:1,name:'Batman PS4',imageUrl:'',price:1000}]) {

    // Section 3
    switch(action.type) {

        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            return state.filter(item => action.payload != state.indexOf(item));
            
        default:
            return state;
    }
}