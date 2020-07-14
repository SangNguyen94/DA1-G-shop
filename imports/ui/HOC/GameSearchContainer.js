import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UserFiles } from '../../Ser/UserFiles';
import { GameFiles } from '../../Ser/GameFiles';
import { games } from '../../api/games'
import { gamesList } from '../../api/gamesList';
import GameDisplay from '../GameDisplay';
const GameSearchContainer = withTracker(({ title, name }) => {
  const fh = Meteor.subscribe('files.all');
  Meteor.subscribe('games');
  const docs = fh.ready();
  const filesHandle = Meteor.subscribe('gamesList');
  const docsReadyYet = filesHandle.ready();
  let files = games.find({name: { $regex: name, $options: "i"}}).fetch();
  const images = UserFiles.find({}).fetch();
  return {
    docsReadyYet,
    files,
    docs,
    images,
    title
  };
})(GameDisplay);
export default GameSearchContainer;