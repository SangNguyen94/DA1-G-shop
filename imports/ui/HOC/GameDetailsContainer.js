import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMatchSelector } from 'react-router-redux';
import { matchPath } from 'react-router'
import {UserFiles} from '../../Ser/UserFiles';
import {GameFiles} from '../../Ser/GameFiles';
import {games} from '../../api/games';
import {publisher} from '../../api/publisher';
import GameDetails from '../GameDetails';
// const match = matchPath( {
//   path: '/view-game-details/:gameID',
//   exact: true,
//   strict: false
// });

const GameDetailsContainer =  withTracker( ( ) => {
 
   // const {id}=this.props.params.gameID;
    // var url_str=window.location.href;
    // const arr=url_str.split('/');
    // const value=arr.slice(3);
    // const gid=value[val  ue.length-1];
    // id=gid;
    // const matchSelector = createMatchSelector(  '/view-game-details/:gameID' );
    // const match=matchSelector(state);
    // const id=match.gameID;
    //const {id}=props.match.params.gameID;
    
    // const mapStateToProps = (state, ownProps) => {
    //   console.log(ownProps);
    //   return {...state.resource, gameId: ownProps.match.params.id}
    // }
    console.log(this.props);
    const id=this.props.params.gameID;
    const fh=Meteor.subscribe('files.all');
    const gameFiles=Meteor.subscribe('GF.bought');
    
    const docs=fh.ready();
    const gameHandle=gameFiles.ready();
    const filesHandle = Meteor.subscribe('games');
    const docsReadyYet = filesHandle.ready();
    const files = games.findOne({_id:id});
   
    const gameName=files.name;
    const gameTags=files.tags;
    const gamePrice=files.price;
    const gameSales=files.sales;
    const gameCompany=files.company;
    const gameUrl=UserFiles.findOne({'meta.id':id}).link();
    return {
      docsReadyYet,
      files,
      docs,
      gameUrl,
      gameName,
      gameTags,
      gamePrice,
      gameSales,
      gameCompany
    };
  })(GameDetails);
  export default GameDetailsContainer;