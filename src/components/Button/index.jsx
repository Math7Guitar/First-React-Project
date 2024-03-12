import { Component } from 'react';
import './styles.css';

export class Button extends Component {
    render() {
        const { text, method } = this.props;
        return (<button className="pagination" onClick={ method }>{ text }</button>);
    }
}