import React from 'react';
import { DetailWarrp, Content } from './style';
import { connect } from 'react-redux';
import action from './store/action';
import { withRouter } from 'react-router-dom';


class Detail extends React.Component{
    componentDidMount() {
        this.props.getDate(this.props.match.params.id);
        console.log(this.props.match.params.id); // 获取用户点击列表的id号
    }
    render() {
        let { title, content } = this.props;
        return <DetailWarrp>
            <h1>{title}</h1>
            <Content dangerouslySetInnerHTML={{__html:content}}>
            </Content>
        </DetailWarrp>
    }
}

let mapStateToProps = (state) => ({
    title:state.getIn(['detail',"title"]),
    content:state.getIn(['detail',"content"])
})

let mapDispatchToProps = (dispatch) => ({
    getDate(id) {
    //  请求的数据 
        dispatch(action.getInfo(id))
    }
    
})
export default connect(mapStateToProps,mapDispatchToProps)( withRouter(Detail));