import * as Types from './action-types';
import { fromJS } from 'immutable';


// immutable所创建的数据有一个迷人的特性:数据创建后不会被改变
const initState = fromJS({
    focused: false,
    searchList: [],
    mouseIn:false,
    page:1,
    totalPage:1
});

export default (state = initState, action) => {

    switch (action.type) {
        case Types.SEARCH_FOCUS:
            return state.set("focused", true);
        case Types.SEARCH_BLUR:
            return state.set("focused", false);
        case Types.SEARCH_LIST:
            return state.merge({
                searchList: action.data,
                totalPage: action.totalPage
            });
        case Types.SEARCH_ENTER:
            return state.set("mouseIn",true);
       case Types.SEARCH_LEAVE:
            return state.set("mouseIn", false);
        case Types.SEARCH_CHANGE_PAGE:
            return state.set("page",action.page);
        default:
            return state
    }
}

