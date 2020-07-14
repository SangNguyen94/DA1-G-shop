import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session'
import { Router, Route, browserHistory,DefaultRoute } from 'react-router';
export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            quantity: 0,

        };
    }
   clicked(){
      browserHistory.push('/checkout');
   }

    render() {
        const divStyle={
            fontSize:'16px',
            color:'white',
        };
        return <div className="pull-right w-50  " >
            <ul className="header-btns">
                    <a  onClick={this.clicked}>
                        <div className="header-btns-icon">
                            <i className="fa fa-shopping-cart"style={divStyle}>                         </i>
                            <span className="qty" style={divStyle}>                                {this.props.quant}</span>
                        </div>
                        <strong className="text-uppercase" style={divStyle}>My Cart</strong>
                        <br />
                    </a>
               
                    {/* <div className="custom-menu">
                        <div id="shopping-cart">
                            <div className="shopping-cart-list">
                        <div className="product product-widget">
                            <div className="product-thumb">
                                <img src="/img/thumb-product01.jpg" alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                            </div>
                            <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                        </div>
                        <div className="product product-widget">
                            <div className="product-thumb">
                                <img src="/img/thumb-product01.jpg" alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                            </div>
                            <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                            <div className="shopping-cart-btns">
                                <button className="main-btn">View Cart</button>
                                <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
                    </div> */}
                
            </ul>
        </div>


    }
}
