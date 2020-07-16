import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UserFiles } from '../../Ser/UserFiles';
import { GameFiles } from '../../Ser/GameFiles';
import OrderReview from '../OrderReview';
import { cart } from '../../api/cart';
import { games } from '../../api/games';

const OrderContainer = withTracker(({ props }) => {
    // const fh=Meteor.subscribe('filcaes.all');
    // const docs=fh.ready();
    const filesHandle = Meteor.subscribe('cart.user');
    const docsReadyYet = filesHandle.ready();
    const gamesHandle = Meteor.subscribe('games');
    const files = cart.findOne();
    let total = 0;
    let gamescursor;
    if (docsReadyYet && gamesHandle.ready()) {
        
        gamescursor = files.products.map(game => {
            let gamePrice = games.findOne({ _id: game });
            if (gamePrice.sale != 0) {
                total += (gamePrice.price - (gamePrice.price * gamePrice.sale/100));
            }
            else total+=gamePrice.price;

        })
        total=parseFloat(total);
    }
    total=total.toFixed(2);
    return {
        docsReadyYet,
        files,
        total
    };
})(OrderReview);
export default OrderContainer;