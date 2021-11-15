import React from 'react';
import { sendAction } from '../../action';
import store from '../../store';


class Home extends React.Component {

    handleClick = () => {
        const action = sendAction();
        store.dispatch(action);
    }

    /** 当组件一加载完毕的时候来监听 */
    componentDidMount(){
        store.subscribe(() => {
            console.log('subscribe:', store.getState());
            this.setState({});
            
        });
    }

    render() { 
        return (
        <>
            <button onClick={this.handleClick}>test</button>
            <div>{store.getState().value}</div>
        </>
        )
    }
}
 
export default Home;