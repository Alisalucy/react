import * as Types from './action-types';
import axios from 'axios';
import { fromJS } from 'immutable';

const getData = (result) => ({
    type: Types.CHANE_HOME_DATA,
    listItem: result.listItem,
    recommelist: result.recommelist,
    topicList: result.topicList
})

const getMore = (list,nextpage) => ({
    type: Types.LOADINGMORE,
   list: fromJS(list),
   nextpage
})
export default {
    getInfo() {
        return (dispatch) => {
            axios.get("/api/home.json").then((res) => {
                const result = res.data.data;
                const action = getData(result)
                dispatch(action);
            })
        }
    },

    getMore(page){
        return (dispatch) => {
            axios.get("/api/homelist.json?page="+page).then((res) => {
                const data = res.data.data;
                const action = getMore(data,page+1)
                dispatch(action);
            })
        }
    },

    isShow(show){
        return {type:Types.CHANGE_SHOW,
        show
    }
    }

}