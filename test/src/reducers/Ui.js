import * as types from '../actions/ActionTypes';

const initialState = {
  color : [255,255,255]
}

export default function Ui(state = initialState, action){
  if(action.type === types.SET_COLOR){
    return{
      //이것이 바로 new state! 이걸 return 한다.
      color : action.color
    };
  }else{
    return state;
  }
}
