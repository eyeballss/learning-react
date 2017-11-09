//action을 불렀을 때 자동으로 불리도록 이름이 index가 되었음.

import * as types from './ActionTypes'; //types 안에 ActionTypes의 모든 상수가 들어감.

//단지 type 상수를 돌려주는 함수들이 여기 있다.
//함수를 export 해서, 아래 함수들을 바깥에서도 사용할 수 있게 만든다.
  export function increment(){
    return {
      type : types.INCREMENT
    };
  }

  export function decrement(){
    return {
      type : types.DECREMENT
    };
  }

  export function setColor(color){
    return {
      type : types.SET_COLOR,
      color : color
    };
  }
