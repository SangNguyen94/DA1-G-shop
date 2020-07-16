import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {UserFiles} from '../../Ser/UserFiles';
import {GameFiles} from '../../Ser/GameFiles';
import {games} from '../../api/games'
import IndividualOrder from '../IndividualOrder'
const IndividualOrderContainer =  withTracker( ( {id} ) => {
    const fh=Meteor.subscribe('files.all');
    const docs=fh.ready();
    const filesHandle = Meteor.subscribe('games');
    const docsReadyYet = filesHandle.ready();
    let files;
    if(docsReadyYet)
    {
         files = games.findOne({_id:id});
    }
     const imagesLink=UserFiles.findOne({'meta.id':id}).link();
    return {
      docsReadyYet,
      files,
      docs,
      imagesLink
    };
  })(IndividualOrder);
  export default IndividualOrderContainer;