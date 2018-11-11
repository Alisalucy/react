## 环境配置
```javascript
  npm i create-react-app -g
  create-react-app jianshu
```

###项目运行
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

### 项目文档说明
 src--app.js 项目渲染文件
    -- index.js  项目入口文件
    -- style.js  项目的全局样式


## 项目运用的插件

- [css插件] styled-components
  ``` javascript
    编写全局样式
    import { createGlobalStyle }from'styled-components'

    export const Globalstyle = createGlobalStyle`　
    body{
    　　margin: 0;
    　　padding: 0
    　}`

    以组件的形式引入样式文件
    import { Globalstyle } from './style'
    <div>
　　　　　　<Globalstyle/>
　　</div>
  ```





                                                                                                                                                                                                                                                     






