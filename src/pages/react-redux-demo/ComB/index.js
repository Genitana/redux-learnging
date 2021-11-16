import React from 'react';
import { connect } from 'react-redux';
 class ComB extends React.Component {
  render(){
    return (
      <div>{this.props.myvalue}</div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log('ComB', state);
    return {
      myvalue: state.count
    }
}

export default connect(mapStateToProps)(ComB);