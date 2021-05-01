import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { createStore, compose, applyMiddleware } from 'redux';

/*const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);*/

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
)

export default store;
