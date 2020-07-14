import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };


    }
    onSubmit(e) {
        e.preventDefault();
        let searchParam = this.refs.search.value.trim();
        browserHistory.push('/search-games/' + searchParam);

    }


    render() {
        return <div className=" pull-right">
            <form onSubmit={this.onSubmit.bind(this)} className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
                <input className="form-control form-control-sm mr-3 w-100 h-100" ref="search" name='search' type="text" placeholder="Search"
                    aria-label="Search" />
            </form>
        </div>
    }
}
