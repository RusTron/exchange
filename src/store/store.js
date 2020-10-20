import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers/todoReducer';
// import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
  todosList: todoReducer,
  // loading: loadingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
