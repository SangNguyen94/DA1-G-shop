import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UserFiles } from '../../Ser/UserFiles';
import { GameFiles } from '../../Ser/GameFiles';
import OrderReview from '../OrderReview';
import { cart } from '../../api/cart';
import { games } from '../../api/games';
import StatisticReview from '../StatisticView';

const StatisticContainer = withTracker(({ props }) => {
    // const fh=Meteor.subscribe('filcaes.all');
    // const docs=fh.ready();
    
    const gamesHandle = Meteor.subscribe('games');
    let total = 0;
    let files;
    const gamesReady=gamesHandle.ready();
    let gamescursor;
    if ( gamesHandle.ready()) {
        files=games.find({userId:Meteor.userId()}).fetch();
        gamescursor=files.map(game=>{
            total+=game.profit;
        })
        // gamescursor = files.products.map(game => {
        //     let gamePrice = games.findOne({ _id: game });
        //     if (gamePrice.sale != 0) {
        //         total += (gamePrice.price - (gamePrice.price * gamePrice.sale/100));
        //     }
        //     else total+=gamePrice.price;

        // })
        total=parseFloat(total);
    }
    total=total.toFixed(2);
    return {
        gamesReady,
        files,
        total
    };
})(StatisticReview);
export default StatisticContainer;