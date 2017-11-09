import React, { Component } from 'react';
import PropTypes from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}
const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

//컨트롤러를 만들어주는 컴포넌트.
//즉, 버튼들을 만들어준다.
class Control extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                //버튼을 눌렀을 때 실행될 함수는, props 안에 있다.
                //만약 함수가 없다면 warning을 보여줄꺼야.
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
