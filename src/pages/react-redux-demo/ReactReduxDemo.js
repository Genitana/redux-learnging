import React from 'react';
import './reactReduxDemo.css';

import store from '../../store';
import ComA from './ComA';
import ComB from './ComB';
import {Provider} from  'react-redux';
// 导入provider，利用这个组件包裹我们的结构，达到统一维护store的效果

function ReactReduxDemo () {
  return (
    <Provider store={store}>
      <div className='react-redux-demo'>
        <ComA></ComA>
        <ComB></ComB>
      </div>
    </Provider>
    )
}


export default ReactReduxDemo;