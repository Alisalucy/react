import Loadable from 'react-loadable';
import React from 'react';

// 所有的js文件，打包压缩成bundle文件，当项目比较大时，加载就会变慢，这时需要一个异步加载
// 只有当前页面显示时，才加载当前页面
// react-loadable是一款loading高阶组件,只有当当前页面被打开时，才会加载。是一个异步加载的库
const LoadableAnotherComponent = Loadable(
    {loader:() => import('./'),
    loading(){
        return <div>正在加载</div>
    }}
);
export default ()=> <LoadableAnotherComponent></LoadableAnotherComponent>