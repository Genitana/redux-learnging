import React from 'react';
import './reactReduxDemo.css';

import store from '../../store';
import ComA from './ComA';
import ComB from './ComB';

function ReactReduxDemo () {
  return (
    <div>
      <ComA></ComA>
      <ComB></ComB>
    </div>)
}


export default ReactReduxDemo;