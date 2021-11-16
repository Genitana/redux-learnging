import React from 'react';
import {connect} from 'react-redux';
  class ComA extends React.Component {

   handleClick = () => {
      console.log('ComA', this.props);
      
      // 这里便可以通过this.props拿到 在 mapDispatchToProps 返回的 sendAction
      this.props.sendAction();
  }

  render(){
    return (
      <button onClick={this.handleClick}> + </button>
    );
  }
}

/**
 * 这个函数要有返回值，返回值是一个对象
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendAction: () => {
      dispatch({type:'add_action', count:10});
    }
  }
};

export  default connect(null, mapDispatchToProps)(ComA);