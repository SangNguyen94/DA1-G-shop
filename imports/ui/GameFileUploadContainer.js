import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameFileUploadComponent from './GameFileUpload';
import {UserFiles} from '../Ser/UserFiles';
import {GameFiles} from '../Ser/GameFiles'
const GameFileUploadContainer =  withTracker( ( {id} ) => {
    const filesHandle = Meteor.subscribe('GF.all');
    const docsReadyYet = filesHandle.ready();
    const files = GameFiles.find({"meta.id":id}, {sort: {name: 1}}).fetch();
  
    return {
      docsReadyYet,
      files,
      id,
    };
  })(GameFileUploadComponent);
  export default GameFileUploadContainer;