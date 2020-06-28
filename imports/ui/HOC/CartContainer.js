import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cart from '../Cart';
import { Mongo } from 'meteor/mongo';
import { cart } from '../../api/cart';

const cartQuantity= new Mongo.Collection('cartQuantity');

const CartContainer= withTracker(({ props }) => {
    const filesHandle = Meteor.subscribe('cart.user');

  
    const quantHandle=Meteor.subscribe('cart.quantity');
    const docsReadyYet = filesHandle.ready();
    if(docsReadyYet)
    {
        console.log("trueeeee");
    }
    const files = cart.findOne();
    const cartquant=cartQuantity.findOne();
    // const productCount=cart.aggregate([
    //     {
    //        $project: {
    //           item: 1,
    //           quantity: { $cond: { if: { $isArray: "$products" }, then: { $size: "$products" }, else: "NA"} }
    //        }
    //     }
    //  ] )
    console.log("cart:"+files);
    let quant=0;
    if(quantHandle.ready())
    {
        console.log("ready");
        if(cartquant.quantity)
    {
        quant=cartquant.quantity;
    }
    else
    {
        quant =0;
    }
    }
    
    return {
        docsReadyYet,
        files,
        quant,
    };
})(Cart);
export default CartContainer;
