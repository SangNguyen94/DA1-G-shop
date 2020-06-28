import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';

export default class CartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            product:Session.get('products'),

        };
        
    }
    CartAdd()
    {
        console.log(this.props.gameId);
        Meteor.call('cart.add',Meteor.userId(),this.props.gameId);
    }
    
    render() {
        console.log(this.props.gameId);
        return  <div className="product-btns W-50">
        <button className="primary-btn add-to-cart pull-right" onClick={this.CartAdd.bind(this)}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
    </div>


    }
}
CartButton.propTypes = {
    
    gameId: PropTypes.string
}
