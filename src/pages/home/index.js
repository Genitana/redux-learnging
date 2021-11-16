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
        /**
         * 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。
         * 你可以在回调函数里调用 getState() 来拿到当前 state。
         */
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