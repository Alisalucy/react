import * as Types from './action-type';
import { fromJS } from 'immutable';

let initState = fromJS({
    title:'',
    content:''
})

export default (state = initState, action)=>{
    switch(action.type){
        case Types.GET_DATA:
            return state.merge({
				title: action.title,
				content: action.content
			});

          default:
          return state
    }
    
}