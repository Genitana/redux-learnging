import React, { Component } from 'react';
import {createStore, combineReducers} from 'redux';

/** 改变count的reduce */
const changeCount = (count=0, action) => {
    switch(action.type) {
        case 'ADD':
            return count + 1 ;
        case 'DEC': 
            return count -1;
        default:
            return count; 
    }
}
/** 改变random的reduce */
const changeRandom = (random=0, action) => {
    return action.type === "random" ? Math.random() : random;
}

/** combineReducers函数，作用是合并reduce，传进去的是个对象，key也是state中的的key */
const reducers = combineReducers({
    // 这里的key也是state中的key，store.getState()拿到的对象就会是 {count:xxxx, random:xxxx}
    count: changeCount,
    random: changeRandom,
})

/** 创建store */
const store =  createStore(reducers);

class CombineReducersDemo extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    componentDidMount(){
        // 订阅，每当store.dispatch执行的时候，store.subscribe(listener)的入参listener函数就会执行
       this.unlistener =  store.subscribe(() => {
            this.setState({...store.getState()});
        })
    }

    componentWillUnmount() {
        // 取消订阅
        if(this.unlistener) {
            console.log('this.unlistener ...');
            this.unlistener();
        }
    }

    render() {

        return (
            <>
                <h2>combineReducers Demo</h2>
                <div>
                    <h2 style={{display:'inline-block', marginRight:'20px'}}>{this.state.count}</h2>
                    <button onClick={() => store.dispatch({type:'ADD'})}>ADD</button>
                    <button onClick={() => store.dispatch({type:'DEC'})}>DEC</button>
                </div>
                <div>
                    <h1>{this.state.random}</h1>
                    <button onClick={() => store.dispatch({type:'random'})}>random</button>
                </div>
                <hr></hr>
            </>
        );
    }
}

export default CombineReducersDemo;