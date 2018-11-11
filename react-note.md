## react

初学者对webpack运用不是很好的话，最好使用脚手架create-react-app
安装react插件时，yarn对网络环境要求比较高，若yarn安装不成功，采用cnpm安装即可

##创建项目
```javascript
    create-react-app jianshu
```

##jsx语法

在react中要作用jsx语法，必须引入 import React from 'react';

1. Fragment  点位符，代替render里的根标签

```javascript
    import React,{Fragment} from 'react';
    class App extends React.Component{
        render(){
            return (
                // 不想要这个包裹的div，可以用Fragment作点位符
                // <div>
                //     <div>主体内容</div>
                //     <button>提交</button>
                // </div>
                <Fragment>
                     <div>主体内容</div>
                     <button>提交</button>
                </Fragment>
            )
        }
    }
```

2.设置默认状态state，更改状态setstate

```javascript
    custructor(){
        super();
        this.state={
            value:'123'
        }
    }
    this.setstate({
        value:e.target.value
    })
```
3.dangerouslySetInnerHtml = {{__html:不转义的内容}}
让标签里嵌套的标签不转义
```javascript
    <li dangerouslySetInnerHtml = {{\_\_html:<h2>输入的内容</h2>}}/>
    输出结果："输入的内容"
```

## immutable 插件

immutable 本质：复制一份state，以复制的state中修改数据,方便以后做性能优化
