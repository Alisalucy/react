import React, { PureComponent }from 'react';
import { LoginWaper, LoginForm, Input, Button } from './style';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import action from './store/action';


class Login extends PureComponent {
    componentDidMount() {
        console.log(this.account)
    }
   
    render() {
        let { login } = this.props;
        if (!login) {
            return (
                <LoginWaper>
                <LoginForm>
                    <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                    <Input placeholder='密码' type="password" ref={(input) => {this.password = input}}/>
                    <Button onClick={() => this.props.getValue(this.account, this.password)}>登录</Button>
                </LoginForm>
            </LoginWaper>
            )
        } else {
            // 为true重定向页面
           return  <Redirect to="/"></Redirect>
        }
        
    }
}

let mapStateToProps = (state) => ({
    login: state.getIn(['login', 'show'])
})

let mapDispatchToProps = (dispatch) => ({
    getValue(accountElem, passwordElem) {
        dispatch(action.getval(accountElem.value,passwordElem.value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);