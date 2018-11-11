import * as Types from './action-type';
import axios from 'axios';
import { fromJS } from 'immutable';

const getInfoData = (title, content) => ({
    type: Types.GET_DATA,
    title,
    content
})
export default {
    getInfo(id) {
        return (dispatch) => {
            // 根据用户传过来的id判断请求的是哪个页面。动态路由获取参数
            axios.get('/api/detail.json?id='+id).then((res) => {
                let result = res.data.data;
                dispatch(getInfoData(result.title, result.content))
                
            })
        }

    }
}