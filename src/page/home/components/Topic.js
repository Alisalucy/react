import React from 'react';
import { connect } from 'react-redux';

import {
    TopicWrapper,
    TopicItem
} from '../style.js'

class Topic extends React.Component {
   
    render() {
        // list是immutable数组所以不能用[方式获取属性]
        let { list } = this.props
        return <div>
            <TopicWrapper>
                {list.map((item)=>{
                   return <TopicItem key={item.get('id')}> 
                    <img className="topic-pic" src={item.get('src')} alt=""/>
                    {item.get('title')}
                    </TopicItem>
                })}
               
            </TopicWrapper>
        </div>
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(["home","topicList"])
})

export default connect(mapStateToProps, null)(Topic);