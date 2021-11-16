
const initState = {value:'默认值',count:0};

const reducer = (state = initState, action) => {
  console.log('reducer',state,action );
  
  switch (action.type) {
    case 'send_type':
      
      return Object.assign({},state, action);
  case 'add_action':
    return {...state, count: state.count + 1 }
    default:
      return state;
  }
}

export {reducer};