import { fromJS } from 'immutable';
import * as Types from './action-type'
const initState =fromJS({
    show:false
})

export default (state=initState,action) => {
    switch (action.type) {
        case Types.GETVALUE:
            return state.set("show", action.value) 
            case Types.LOGOOUT:
            return state.set("show",action.value)    
        default:
        return state
    }
   
}