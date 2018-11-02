import * as Types from './action-types';
import axios from 'axios';
import { fromJS } from 'immutable';


const getList = (data) => ({
    type: Types.SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})
export default {
    onfocus() {
        return { type: Types.SEARCH_FOCUS }
    },
    onblur() {
        return { type: Types.SEARCH_BLUR }
    },
    getSearchList() {
        // 这里的dispatch是store里的dispatch
        return function (dispatch) {
            axios.get("/api/searchList.json")
                .then((res) => {
                    const data = res.data;
                    dispatch(getList(data.data))
                }).catch(
                    console.log('error')
                )
        }

    },
    getSearEnter() {
        return { type: Types.SEARCH_ENTER }
    },
    getSearLeave() {
        return { type: Types.SEARCH_LEAVE }
    },
    getPageChange(page) {
        return { type: Types.SEARCH_CHANGE_PAGE,page}
    }
}