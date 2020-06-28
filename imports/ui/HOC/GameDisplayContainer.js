import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameDisplay from '../GameDisplay';
import {UserFiles} from '../../Ser/UserFiles';
import {GameFiles} from '../../Ser/GameFiles';
import {games} from '../../api/games'
const GameDisplayContainer =  withTracker( ( {props} ) => {
    const fh=Meteor.subscribe('files.all');
    const docs=fh.ready();
    const filesHandle = Meteor.subscribe('games');
    const docsReadyYet = filesHandle.ready();
    const files = games.find({}, {sort: {name: 1}}).fetch();
     const images=UserFiles.find({}).fetch();
    return {
      docsReadyYet,
      files,
      docs,
      images
    };
  })(GameDisplay);
  export default GameDisplayContainer;