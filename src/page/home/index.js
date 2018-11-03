import React, { PureComponent } from 'react';
import List from './components/List.js';
import Topic from './components/Topic.js';
import Recomme from './components/Recomme.js';
import Writer from './components/Writer.js';
import action from './store/action';


import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Totop
} from './style.js'

class Home extends PureComponent {
    componentDidMount() {
        this.props.getAction();
        this.getShow();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.getShow);
    }
    getShow() {
        window.addEventListener('scroll', this.props.getShow);
    }
    toTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4541/9883913ce16b7812d68ce670c791a657d9a68eff.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                
                <HomeRight>
                    <Recomme></Recomme>
                    <Writer></Writer>
                </HomeRight>

            </HomeWrapper>
            {this.props.show ? <Totop onClick={this.toTop} >回到顶部</Totop> : null}
        </div>
    }
}

const mapState = (state) => ({
    show: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    getAction() {
        dispatch(action.getInfo())
    },
    getShow() {
        if (document.documentElement.scrollTop > document.documentElement.clientHeight - 100) {
            dispatch(action.isShow(true))
        } else {
            dispatch(action.isShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);