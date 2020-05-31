import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameIndividualFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    
    this.GFremoveFile = this.GFremoveFile.bind(this);
    this.GFrenameFile = this.GFrenameFile.bind(this);

  }

  
  

  GFremoveFile(){
    let conf = confirm('Are you sure you want to delete the file?') || false;
    if (conf == true) {
      Meteor.call('GFRemoveFile', this.props.fileId, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  GFrenameFile(){

    let validName = /[^a-zA-Z0-9 \.:\+()\-_%!&]/gi;
    let prompt    = window.prompt('New file name?', this.props.fileName);

    // Replace any non valid characters, also do this on the server
    if (prompt) {
      prompt = prompt.replace(validName, '-');
      prompt.trim();
    }

    if (!_.isEmpty(prompt)) {
      Meteor.call('GFRenameFile', this.props.fileId, prompt, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  render() {
    return <div className="m-t-sm">
      <div className="row">
        <div className="col-md-12">
          <strong>{this.props.fileName}</strong>
          <div className="m-b-sm">
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <button onClick={this.GFrenameFile} className="btn btn-outline btn-primary btn-md">
            Rename
          </button>
        </div>


        <div className="col-md-3">
          <a href={this.props.fileUrl} className="btn btn-outline btn-primary btn-md"
             target="_blank">View/Download</a>
        </div>

        <div className="col-md-2">
          <button onClick={this.GFremoveFile} className="btn btn-outline btn-danger btn-md">
            Delete
          </button>
        </div>

        <div className="col-md-4">
          Size: {this.props.fileSize}
        </div>
      </div>
    </div>
  }
}
GameIndividualFile.propTypes= {
    fileName: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired,
    fileUrl: PropTypes.string,
    fileId: PropTypes.string.isRequired
  }
export default GameIndividualFile;