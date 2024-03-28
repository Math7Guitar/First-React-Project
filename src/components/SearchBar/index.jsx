/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import P from 'prop-types';

export class SearchBar extends Component {
    render() {
        const { method } = this.props;
        return(<input type="search" className="search" onChange={ (e) => method(e.target.value) } value={ (pS) => { return { search: pS.search } } } placeholder='Search' />);
    }
}

SearchBar.propTypes = {
  method: P.func.isRequired,
}
