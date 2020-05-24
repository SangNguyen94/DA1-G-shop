import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarUploadComponent from './AvatarUpload';
import {UserFiles} from '../Ser/UserFiles';
const AvatarUploadContainer =  withTracker( ( {id} ) => {
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const files = UserFiles.findOne({userId:this.userId}).fetch();
  
    return {
      docsReadyYet,
      files,
      id
    };
  })(AvatarUploadComponent);
  export default AvatarUploadContainer;