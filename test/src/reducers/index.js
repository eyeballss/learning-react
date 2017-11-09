import {combineReducers} from 'redux';
import Counter from './Counter';
import Ui from './Ui';

//리듀서들을 갖고 있나보다.
const reducers = combineReducers({
  Counter, Ui
});


export default reducers;
