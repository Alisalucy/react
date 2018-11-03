import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

// 引入action
import action from './store/action'
// 引入样式组件
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style'


class Header extends PureComponent {

    getListArea() {
        const { focused, totalPage, searchList, handlChange, handleEent, mouseIn, mouseLeave, page } = this.props;
        const pageList = [];
        // 把immutable数据转为普通数组
        const newList = searchList.toJS()
        // page是第几页，每页是10条数据；比如，第1页，1-10；第2页 11-20；第3页 21-30
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (newList.length) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }

        }
        if (focused || mouseIn) {
            return <SearchInfo onMouseEnter={handleEent} onMouseLeave={mouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={() => { handlChange(page, totalPage, this.ChangeDom) }}>
                        <i className="iconfont spin" ref={(x) => { this.ChangeDom = x }}>&#xe613;</i>
                        换一批
                    </SearchInfoSwitch>

                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}

                </SearchInfoList>

            </SearchInfo>
        } else {
            return null;
        }
    }
    render() {
        let { focused, searchList, handleFocu, handleBluer } = this.props

        return (
            <div>
                <HeaderWrapper>
                    <Link to={'/'}>
                        <Logo />
                    </Link>

                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={2000}
                                classNames="slider">
                                <NavSearch className={focused ? "focused" : ""}

                                    onFocus={() => { handleFocu(searchList) }}
                                    onBlur={handleBluer}
                                ></NavSearch>
                            </CSSTransition>
                            {this.getListArea()}
                            <i className={focused ? "iconfont focused zoom" : "iconfont zoom"}>&#xe617;</i>

                        </SearchWrapper>

                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe603;</i>
                            写文章
                    </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    // 现在这里的state是redux-immutable的对象,可以调用api
    // state.get("header").get("focused")
    // getIn({a:b}) 第一个参数是在哪里获取数据， 第二个参数是获取的数据
    return {
        focused: state.getIn(["header", "focused"]),
        searchList: state.getIn(["header", "searchList"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"])
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleFocu(searchList) {
            // console.log(searchList); 中每一次size都不一样，根据size判断
            // 若size === 0 ,是第一次请求数据。两次请求，直接从缓存中获取即可
            // 不再从服务器获取。提高性能
            (searchList.size === 0) && dispatch(action.getSearchList());
            dispatch(action.onfocus());

        },
        handleBluer() {
            dispatch(action.onblur())
        },
        handleEent() {
            dispatch(action.getSearEnter());
        },
        mouseLeave() {
            dispatch(action.getSearLeave());
        },
        handlChange(page, totalPage, changeDom) {
            let rotateDom = changeDom.style.transform.replace(/[^0-9]/ig, '');
            if (rotateDom) {
                rotateDom = parseInt(rotateDom, 10)
            } else {
                rotateDom = 0;
            }
            changeDom.style.transform = 'rotate(' + (rotateDom + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(action.getPageChange(page + 1));
            } else {
                dispatch(action.getPageChange(1));
            }

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)