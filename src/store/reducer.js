// combineReducers 合并reducer
// 引入redux-immutable使state也变成immutable对象
import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../comon/header/store'
import {reducer as homeReducer} from '../page/home/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer;