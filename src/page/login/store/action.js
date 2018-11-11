import * as Types from './action-type';
import axios from 'axios';

export default {
    getval(val,pwd) {
        return (dispatch) => {
            axios.get('/api/login.json?val=' + val + 'pwd=' + pwd).then(res => {
                const result = res.data.data;
                if (result) {
                    dispatch({
                        type: Types.GETVALUE,
                        value:true
                    })
                }else{
                    console.log('登录失败')
                }
            })
            
        }
    },
    logouts() {
        return {
                type: Types.LOGOOUT,
                value:false
        }
       
    }
    
}