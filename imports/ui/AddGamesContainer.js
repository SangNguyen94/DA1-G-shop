import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameFileUploadComponent from './GameFileUpload';
import {UserFiles} from '../Ser/UserFiles';
import {GameFiles} from '../Ser/GameFiles'
import {publisher} from '../api/publisher'

import AddGames from './AddGames';
 const AddGamesContainer = withTracker( ( props ) => {
  const filesHandle = Meteor.subscribe('publisher.user');
  const docsReadyYet = filesHandle.ready();
  const isPub = publisher.find().fetch();

  return {
    docsReadyYet,
    isPub
  };
})(AddGames);
export default AddGamesContainer;