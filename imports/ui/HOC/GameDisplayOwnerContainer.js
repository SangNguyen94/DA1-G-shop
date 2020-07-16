import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameOwnerDisplay from '../GameOwnerDisplay';
import { UserFiles } from '../../Ser/UserFiles';
import { GameFiles } from '../../Ser/GameFiles';
import { games } from '../../api/games'
import { gamesList } from '../../api/gamesList';
const GameDisplayOwnerContainer = withTracker(({ title, publish }) => {
  const fh = Meteor.subscribe('files.all');
  const gh=Meteor.subscribe('games');
  const docs = fh.ready();
  const filesHandle = Meteor.subscribe('gamesList');
  const docsReadyYet = filesHandle.ready();
  let files = gamesList.find({publish:publish}).fetch();
  let publishBool=publish;
  let gamesCursor=[];
  files.map(game=>{
    let currGame=games.findOne({_id:game.gamesID});
    gamesCursor.push(currGame);
  })
  const images = UserFiles.find({}).fetch();
  return {
    docsReadyYet,
    files,
    gamesCursor,
    docs,
    images,
    title,
    publishBool
  };
})(GameOwnerDisplay);
export default GameDisplayOwnerContainer;