import * as Types from './action-types';
import { fromJS } from 'immutable';


// immutable所创建的数据有一个迷人的特性:数据创建后不会被改变
const initState = fromJS({
   topicList:[],
   listItem:[],
   recommelist:[],
   articlePage: 1,
   showScroll:false
});

export default (state = initState, action) => {

    switch (action.type) {
       case Types.CHANE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            listItem:fromJS(action.listItem),
            recommelist:fromJS(action.recommelist)
            
        });
        case Types.LOADINGMORE:
        return state.merge({
            listItem:state.get("listItem").concat(action.list),
            articlePage:action.nextpage
        });
        case Types.CHANGE_SHOW:
        return state.set("showScroll",action.show);
        default:
            return state
    }
}
