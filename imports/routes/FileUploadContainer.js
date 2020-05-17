import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploadComponent from '../ui/FileUpload';
import {UserFiles} from '../ui/FileUpload';
const FileUploadContainer =  withTracker( ( props ) => {
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const files = UserFiles.find({}, {sort: {name: 1}}).fetch();
  
    return {
      docsReadyYet,
      files,
    };
  })(FileUploadComponent);
  export default FileUploadContainer;