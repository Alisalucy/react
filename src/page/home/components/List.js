import React, { PureComponent } from 'react';
import { Homelist, ListItem, ListMore } from '../style';
import { connect } from 'react-redux';
import action from '../store/action';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, loadingMore, page } = this.props;
        return <Homelist>
            {list.map((item, index) => {
                return (
                    <Link to={'/detail/'+item.get('id')} key={index}>
                        <ListItem >
                            <img alt="" className="pic" src={item.get('src')} />
                            <div className="content">
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('content')}</p>
                                <div className="comment">
                                    {item.get('person')}
                                    <span>✉ {item.get('comments')}</span>
                                    <span>❤ {item.get('like')}</span>
                                </div>
                            </div>
                        </ListItem>
                    </Link>)
            })}
            <ListMore onClick={() => { loadingMore(page) }}>加载更多</ListMore>

        </Homelist>
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "listItem"]),
    page: state.getIn(["home", "articlePage"])
})

const mapDispatch = (dispatch) => ({
    // 加载的是第几页的数据，让后台传过来
    loadingMore(page) {
        dispatch(action.getMore(page))
    }
})
export default connect(mapStateToProps, mapDispatch)(List);