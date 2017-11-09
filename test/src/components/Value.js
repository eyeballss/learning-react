import React, { Component } from 'react';
import PropTypes from 'react';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Value extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1> //props 으로 받은 number를 보여준다. 만약 없다면 -1이 나올 것이야.
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
