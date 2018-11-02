import * as Types from './action-types';
import { fromJS } from 'immutable';


// immutable所创建的数据有一个迷人的特性:数据创建后不会被改变
const initState = fromJS({
   topicList:[
       {
           id: 1,
           src: "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
           title:"读书"
       }
   ]
});

export default (state = initState, action) => {

    // switch (action.type) {
       
    //     default:
    //         return state
    // }
    return state
}
