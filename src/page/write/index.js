import React, { PureComponent }from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';



class Write extends PureComponent {
    
    render() {
        let { login } = this.props;
        if (login) {
            return (
                <div>写文章页面</div>
            )
        } else {
           return  <Redirect to="/login"></Redirect>
        }
        
    }
}

let mapStateToProps = (state) => ({
    login: state.getIn(['login', 'show'])
})

export default connect(mapStateToProps,null)(Write);