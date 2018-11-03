import React,{PureComponent} from 'react';
import { connect} from 'react-redux';
import {RecommeWapper,RecommeList} from '../style';


class Recomme extends PureComponent{
    render() {
        const {list} = this.props;
        return <RecommeWapper>
            {list.map((item) => (
                <RecommeList  key={item.get('id')} imgUrl={item.get('imgUrl') }></RecommeList>
            ))}
        </RecommeWapper>
    }
}

const toMapState = (state) =>({
    list:state.getIn(["home","recommelist"])
})
export default connect(toMapState,null)(Recomme);