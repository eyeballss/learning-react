//
import * as types from '../actions/ActionTypes';

const initialState = {
  number : 0
};

//여기서의 첫번쨰 인자(state)가 redux의 현재 state임.
//현재 state가 없으면 자동으로 initialState가 불릴 것이다.
//이것이 바로 리듀서이며, 현재 state와 action에 따라서 new state를 만든다.
export default function counter(state = initialState, action){

//리듀서는 action을 받을 수 있지. 여기서 new state를 만든다.
  switch(action.type){
    case types.INCREMENT:
      // ...state 란 기존 state를 모두 불러오는 것임. 거기다가
      //뒤에 number : state.number +1 를 해주면, 기존의 것에 이것이 업데이트 됨. 간단하지!
      return { ...state, number : state.number +1 };
      //만약 오브젝트 안의 어떤 것을 업데이트 하고 싶다면, 아래처럼 하면 됨.
      // return { ...state, object : {...state.object, element : 0} };
    case types.DECREMENT:
      if(state.number===0) return state;
      else return {...state, number : state.number -1};
    default:
      return state;
  }

  return state;
}
