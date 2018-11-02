import React from 'react';
import List from './components/List.js';
import Topic from './components/Topic.js';
import Recomme from './components/Recomme.js';
import Writer from './components/Writer.js';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style.js'

class Home extends React.Component{
    render() {
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4541/9883913ce16b7812d68ce670c791a657d9a68eff.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic>
                    
                    </Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recomme></Recomme>
                    <Writer></Writer>
                </HomeRight>
                
            </HomeWrapper>
        </div>
    }
}

export default Home;