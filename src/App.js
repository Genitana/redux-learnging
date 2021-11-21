import Home from './pages/home';
import ReactReduxDemo from './pages/react-redux-demo/ReactReduxDemo';
import CombineReducersDemo from './pages/redux-demo/CombineReducersDemo';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <ReactReduxDemo></ReactReduxDemo>
      <CombineReducersDemo></CombineReducersDemo>
    </div>
  );
}

export default App;
