import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploadComponent from '../ui/FileUpload';
import {UserFiles} from '../Ser/UserFiles';
const FileUploadContainer =  withTracker( ( {id} ) => {
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const files = UserFiles.find({"meta.id":id}, {sort: {name: 1}}).fetch();
  
    return {
      docsReadyYet,
      files,
      id
    };
  })(FileUploadComponent);
  export default FileUploadContainer;