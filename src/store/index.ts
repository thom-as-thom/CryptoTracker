import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers({addedCryptos: reducers});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
