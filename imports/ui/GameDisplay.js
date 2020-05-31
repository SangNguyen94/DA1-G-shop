import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {UserFiles} from '../Ser/UserFiles';
import GameIndividual from './GameIndividual';


//const debug = require('debug')('demo:file');
const Dropzone = require('react-dropzone');
export default class GameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false
    };

    
  }

  

  // This is our progress bar, bootstrap styled
  // Remove this function if not needed
  

  render() {
    //debug("Rendering FileUpload",this.props.docsReadyYet);
    if (this.props.files && this.props.docsReadyYet && this.props.docs) {

      let fileCursors = this.props.files;
        
      // Run through each file that the user has stored
      // (make sure the subscription only sends files owned by this user)
      let display = fileCursors.map((aFile, key) => {
        // console.log('A file: ', aFile.link(), aFile.get('name'))
        let link = UserFiles.findOne({"meta.id": aFile._id}).link();  //The "view/download" link

        // Send out components that show details of each file
        return <div key={'file' + key} className="col-md-3 col-sm-6 col-xs-6">
          <GameIndividual
            gameName={aFile.name}
            gameUrl={link}
            gameId={aFile._id}
            gamePrice={aFile.price}
            gameSale={aFile.sale}
          />
        </div>
      })

      return <div>
          <meta charSet="utf-8"/>
	

	
	

	
	

	
	

	
	<link type="text/css" rel="stylesheet" href="/css/style.css" />

	


          <div className="section section-grey">

<div className="container">

    <div className="row">

        <div className="col-md-12">
            <div className="section-title">
                <h2 className="title">Latest Products</h2>
            </div>
        </div>
        
        
      
        {display}
        </div>
         </div>
        </div>
       
      </div>
    }
    else return <div>Loading games</div>;
  }
}
GameDisplay.propTypes = {
  id:PropTypes.string,
};




