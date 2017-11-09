import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    setRandomColor=()=>{
      const color = [
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200)
      ]

      this.props.handleSetColor(color);
    }

    render() {

      const color = this.props.color;
      const style={
        background : `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      };

        return(
            <div style = {style}>
                <Value number = {this.props.number}/> //값에게 number를 준다.
                <Control //버튼들에게 함수를 준다.
                  onPlus = {this.props.handleIncrement}
                  onSubtract = {this.props.handleDecrement}
                  onRandomizeColor = {this.setRandomColor} //위의 메소드.
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    number : state.Counter.number,
    color : state.Ui.color
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleIncrement : () => {dispatch(actions.increment())},
    handleDecrement : () => {dispatch(actions.decrement())},
    handleSetColor : (color) => {dispatch(actions.setColor(color))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //????
