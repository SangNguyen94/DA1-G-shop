import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameDisplay from '../GameDisplay';
import { UserFiles } from '../../Ser/UserFiles';
import { GameFiles } from '../../Ser/GameFiles';
import { games } from '../../api/games'
const GameDisplayContainer = withTracker(({ title, sort }) => {
  const fh = Meteor.subscribe('files.all');
  const docs = fh.ready();
  const filesHandle = Meteor.subscribe('games');
  const docsReadyYet = filesHandle.ready();
  let files;
  if (sort === 'name') {
    files = games.find({}, {limit:5, sort: { updatedAt: -1 }  }).fetch();
  }
  else if(sort === 'none'){
    files = games.find({},).fetch();
  }
  else{
    files = games.find({}, {limit:5, sort: { price: 1 } }).fetch();
  }
  const images = UserFiles.find({}).fetch();
  return {
    docsReadyYet,
    files,
    docs,
    images,
    title
  };
})(GameDisplay);
export default GameDisplayContainer;