import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import {createStore} from 'redux';
import reducers from './reducers';

import * as actions from './actions';
import { Provider } from 'react-redux';

//스토어는 이렇게 만든다.
//reducers = combineReducers 를 통해 만든 reducers 를 기반으로 store를 만든다.
const store = createStore(reducers);

//스토어가 변화될 때 아래의 콜백이 호출된다.
//store.subscribe(() => console.log(store.getState()));

//스토어가 리듀서들에게 액션을 보낼 수 있게 해 줌.
//store.dispatch(actions.increment());

//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);
