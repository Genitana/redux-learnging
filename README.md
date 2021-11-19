## redux learning demo



```
npx create-react-app redux-learning

yarn add redux

yarn add react-redux

```


## Store API
Store
   - `getState()`
   - `dispatch(action)`
   - `subscribe(listener)`
   - `replaceReducer(nextReducer)`
### `store.subscribe(listener)`

添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。

### `store.getState()`
 
返回应用当前的 state 树。它与 store 的最后一个 reducer 返回值相同。


## React-Redux

`redux` 和`react`之间是没有关系的，`redux` 支持`React`、`Angular`、`jQuery`甚至是`JavaScript`。

redux 与 react 搭配起来更好用。

`react-redux` 就是`Redux`官方出的用于配合`React`的绑定库。

`react-redux`能够使你的`React`组件从`Redux` `store`中很方此案的读取数据，并且向`store`中分发`actions`以此来更新数据。

<br>

`react-redux`中的api:
- `Provider`：这个组件能够使你整个app都能获取到store中的数据
   - Provider包裹在根组件最外层，使所有的子组件都可以拿到state
   - Provider 接收`store`作为`props`，然后通过`context`往下传递，这样`react`中任何组件都可以通过`context`获取到`store`
        ```jsx
        import { Provider } from 'react-redux'

          <Provider store={store}>
            <App />
          </Provider>
        ```
- `connect( )`：这个方法能够使组件跟`store`来进行关联
   - `Provider` 内部组件如果想要使用到`state`中的数据，就必须要 `connect` 进行一层包裹封装，换一句话来说就是必须要被 `connect` 进行加强
   - connect就是方便我们组件能够获取到store中的state


## 使用`react-redux`步骤
1. 创建`reducer(state , action)`函数并导出 (纯函数，用原来对发来的action进行处理)

2. 执行`createStore()`得到 store 并导出 （把上面的reducer传进来）
    ```jsx
    import { createStore } from "redux";
    import {reducer} from '../reducer';

    const store  = createStore(reducer);

    export default store;
    ```
3. 用`Provider`包裹最顶层App，并且把store作为属性传下去。利用`Provider`包裹我们的结构，达到统一维护store的效果。
    ```jsx
        import {Provider} from  'react-redux';

        <Provider store={store}>
          <div className='react-redux-demo'>
            <ComA></ComA>
            <ComB></ComB>
          </div>
        </Provider>
    ```

4. 导入`connect(mapStateToProps, mapDispatchToProps)()`方法 
    ```jsx
    import {connect} from 'react-redux';
    ```

5. 对于发送方组件`ComA`，需要发送action，用`connect()`方法进行加强时，第二个参数`mapDispatchToProps`不能为空。因为不需要接收state，所以第一个参数可以传null。
   - `mapDispatchToProps`方法需要返回一个对象，这个对象会返回到`ComA`组件的内部，所以`sendAction`可以直接从`ComA`的`props`中拿到

    ```jsx
        const mapDispatchToProps = (dispatch, ownProps) => {
          return {
            sendAction: () => {
              dispatch({type:'add_action', count:10});
            }
          }
        }; 
        connect(null, mapDispatchToProps)(ComA);
    ```

6. 对于接收方组件`ComB`，需要接收到改变的`state`，用`connect()`方法进行加强时，第一个参数`mapStateToProps`不能为空，第二个参数可以不传。
   - `mapStateToProps`方法也要返回一个对象，这个对象会返回到`ComB`组件的内部，所以`myvalue`可以直接在`ComB`的`props`中拿到。

    ```jsx
        const mapStateToProps = (state, ownProps) => {
            return {
              myvalue: state.count
            }
        };
    ```

