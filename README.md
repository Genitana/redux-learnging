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