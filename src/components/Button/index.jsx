/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import './styles.css';
import P from 'prop-types';

export class Button extends Component {
    render() {
        const { text, method } = this.props;
        return (<button className="pagination" onClick={ method }>{ text }</button>);
    }
}

Button.propTypes = {
  text: P.string.isRequired,
  method: P.func.isRequired
}
